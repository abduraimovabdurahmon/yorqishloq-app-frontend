// Theme controller: light / dark / system, persisted in localStorage.
//
// - "system" (default) follows the phone: Telegram's colorScheme when running
//   inside Telegram, otherwise the OS `prefers-color-scheme`. It keeps tracking
//   live changes (Telegram `themeChanged`, OS media query) until the user picks
//   a fixed theme.
// - "light" / "dark" are an explicit user choice and override the system; the
//   choice is saved so it sticks across launches.
// Applying a theme sets `data-theme` on <html> (which drives all CSS tokens in
// styles.css) and syncs Telegram's header/background + the browser theme-color.

const TG = typeof window !== 'undefined' && window.Telegram ? window.Telegram.WebApp : null;
const KEY = 'yq-theme';
const VALID = ['system', 'light', 'dark'];

// Must mirror --surface / --bg in styles.css for the native chrome colors.
const SURFACE = { light: '#FFFFFF', dark: '#1B1917' };
const BG = { light: '#FAFAF9', dark: '#100F0E' };

export function getTheme() {
  try {
    const v = localStorage.getItem(KEY);
    if (VALID.includes(v)) return v;
  } catch (e) {}
  return 'system';
}

function systemScheme() {
  try { if (TG && TG.colorScheme) return TG.colorScheme === 'dark' ? 'dark' : 'light'; } catch (e) {}
  try { if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'; } catch (e) {}
  return 'light';
}

// The concrete light/dark actually shown for a given selection.
export function resolveScheme(theme) {
  return theme === 'light' || theme === 'dark' ? theme : systemScheme();
}

function applyScheme(scheme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', scheme);
  root.style.backgroundColor = BG[scheme];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', BG[scheme]);
  if (TG) {
    try { TG.setHeaderColor && TG.setHeaderColor(SURFACE[scheme]); } catch (e) {}
    try { TG.setBackgroundColor && TG.setBackgroundColor(BG[scheme]); } catch (e) {}
    try { TG.setBottomBarColor && TG.setBottomBarColor(SURFACE[scheme]); } catch (e) {}
  }
}

let current = 'system';

export function setTheme(theme) {
  current = VALID.includes(theme) ? theme : 'system';
  try { localStorage.setItem(KEY, current); } catch (e) {}
  applyScheme(resolveScheme(current));
  return current;
}

// Only react to system changes while the user is following the system.
function onSystemChange() {
  if (current === 'system') applyScheme(resolveScheme('system'));
}

export function initTheme() {
  current = getTheme();
  applyScheme(resolveScheme(current));
  try { TG && TG.onEvent && TG.onEvent('themeChanged', onSystemChange); } catch (e) {}
  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  } catch (e) {}
}
