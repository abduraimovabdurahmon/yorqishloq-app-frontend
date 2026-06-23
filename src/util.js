// Design tokens (for JS-computed styles)
export const T = { accent: '#F97316', accentLight: '#FFC15E', accentDeep: '#EA580C', accentSoft: '#FFF3EA' };

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
export const TILE = 'background:repeating-linear-gradient(135deg,#F4F3F1,#F4F3F1 9px,#ECEAE7 9px,#ECEAE7 18px);';
export const TILE_S = 'background:repeating-linear-gradient(135deg,#F4F3F1,#F4F3F1 7px,#ECEAE7 7px,#ECEAE7 14px);';
export const TILE_D = 'background:repeating-linear-gradient(135deg,#EDEBE8,#EDEBE8 11px,#E4E1DD 11px,#E4E1DD 22px);';

// Derived order view-model.
export function mapOrder(o) {
  const st = ({
    progress: { bg: '#FFF3EA', color: T.accentDeep },
    confirmed: { bg: '#FFF3EA', color: T.accentDeep },
    done: { bg: '#E9FBEF', color: '#16A34A' },
    cancel: { bg: '#FFF1F1', color: '#DC2626' },
  })[o.kind] || { bg: '#F4F3F1', color: '#78716C' };
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
