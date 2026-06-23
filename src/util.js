// Design tokens (for JS-computed styles)
export const T = { accent: 'var(--accent)', accentLight: 'var(--accentLight)', accentDeep: 'var(--accentDeep)', accentSoft: 'var(--accentSoft)' };

// Convert a CSS declaration string into a React style object.
// Keeps the dense, design-faithful inline styles readable while staying valid React.
const cssCache = new Map();
export function css(str) {
  if (cssCache.has(str)) return cssCache.get(str);
  const o = {};
  str.split(';').forEach((decl) => {
    const i = decl.indexOf(':');
    if (i < 0) return;
    let key = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!key) return;
    if (key.startsWith('--')) { o[key] = val; return; }
    key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    o[key] = val;
  });
  cssCache.set(str, o);
  return o;
}

// Asset URL resolver (respects Vite base path).
export const asset = (p) => import.meta.env.BASE_URL + p;

// Placeholder tile backgrounds (match the design's striped placeholders).
export const TILE = 'background:repeating-linear-gradient(135deg,var(--fill),var(--fill) 9px,var(--border-2) 9px,var(--border-2) 18px);';
export const TILE_S = 'background:repeating-linear-gradient(135deg,var(--fill),var(--fill) 7px,var(--border-2) 7px,var(--border-2) 14px);';
export const TILE_D = 'background:repeating-linear-gradient(135deg,var(--tile-b),var(--tile-b) 11px,var(--tile-c) 11px,var(--tile-c) 22px);';

// Derived order view-model.
export function mapOrder(o) {
  const st = ({
    progress: { bg: 'var(--accentSoft)', color: T.accentDeep },
    confirmed: { bg: 'var(--accentSoft)', color: T.accentDeep },
    done: { bg: 'var(--success-soft)', color: 'var(--success)' },
    cancel: { bg: 'var(--danger-soft)', color: 'var(--danger)' },
  })[o.kind] || { bg: 'var(--fill)', color: 'var(--muted)' };
  const rated = !!o.rating;
  return {
    icon: o.icon, title: o.title, sub: o.sub, date: o.date, price: o.price,
    status: o.status, statusBg: st.bg, statusColor: st.color,
    tileBg: T.accentSoft, tileColor: T.accent,
    hasAction: !!o.action, action: o.action || '', actionIcon: o.actionIcon || 'chevron_right',
    rated, starPct: (((o.rating || 0) / 5) * 100) + '%',
    ratingText: rated ? o.rating.toFixed(1) : '',
  };
}
