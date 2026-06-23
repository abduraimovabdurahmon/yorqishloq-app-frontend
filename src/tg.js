// Telegram WebApp bootstrap + fullscreen handling.
//
// `expand()` only stretches the Mini App to max height but keeps Telegram's
// header visible. True fullscreen (Bot API 8.0) is `requestFullscreen()`, which
// draws the app behind the system status bar and Telegram's close/menu buttons.
// In that mode CSS `env(safe-area-inset-*)` is NOT enough — Telegram exposes its
// own insets (`safeAreaInset` = device notch, `contentSafeAreaInset` = space
// under the Telegram UI controls). We sum them into CSS variables so the app
// chrome (headers, tab bar) can pad itself clear of those controls.

const TG = typeof window !== 'undefined' && window.Telegram ? window.Telegram.WebApp : null;

function num(v) { return typeof v === 'number' && isFinite(v) ? v : 0; }

// Push Telegram's safe-area insets into CSS custom properties.
function syncInsets() {
  if (!TG) return;
  const sa = TG.safeAreaInset || {};
  const ca = TG.contentSafeAreaInset || {};
  const root = document.documentElement.style;
  root.setProperty('--tg-safe-top', (num(sa.top) + num(ca.top)) + 'px');
  root.setProperty('--tg-safe-bottom', (num(sa.bottom) + num(ca.bottom)) + 'px');
  root.setProperty('--tg-safe-left', (num(sa.left) + num(ca.left)) + 'px');
  root.setProperty('--tg-safe-right', (num(sa.right) + num(ca.right)) + 'px');
}

export function initTelegram() {
  if (!TG) return;
  const safe = (fn) => { try { fn(); } catch (e) {} };

  safe(() => TG.ready());

  // Request true fullscreen; expand() is the fallback for clients < Bot API 8.0.
  safe(() => TG.expand());
  if (typeof TG.requestFullscreen === 'function') {
    safe(() => TG.requestFullscreen());
  }

  // In fullscreen a vertical swipe can accidentally minimize/close the app.
  safe(() => TG.disableVerticalSwipes && TG.disableVerticalSwipes());

  safe(() => TG.setHeaderColor && TG.setHeaderColor('#FFFFFF'));
  safe(() => TG.setBackgroundColor && TG.setBackgroundColor('#FAFAF9'));

  // Keep insets in sync as the layout / fullscreen state changes.
  syncInsets();
  safe(() => TG.onEvent && TG.onEvent('safeAreaChanged', syncInsets));
  safe(() => TG.onEvent && TG.onEvent('contentSafeAreaChanged', syncInsets));
  safe(() => TG.onEvent && TG.onEvent('fullscreenChanged', syncInsets));
  safe(() => TG.onEvent && TG.onEvent('viewportChanged', syncInsets));
}
