import { useApp } from './state.jsx';
import { css } from './util.js';

export function Icon({ s, fill = false, className = '', style }) {
  return <span className={`ico${fill ? ' fill' : ''}${className ? ' ' + className : ''}`} style={style}>{s}</span>;
}

// Screen root: applies enter animation from current nav action.
export function Screen({ children, chat = false }) {
  const { anim } = useApp();
  return <div className={`screen${chat ? ' chat-bg' : ''} ${anim}`}>{children}</div>;
}

// Standard header (centered title, optional back + right action).
export function Header({ title, back = false, rightIcon, onRight, onBackTo }) {
  const app = useApp();
  return (
    <div className="hdr">
      {back && (
        <span className="ico back" onClick={() => (onBackTo ? app.tab(onBackTo) : app.back())}>arrow_back</span>
      )}
      <span className="title">{title}</span>
      {rightIcon && (
        <span className="act-r" onClick={onRight}>
          <Icon s={rightIcon} style={{ fontSize: 23, color: 'var(--muted)' }} />
        </span>
      )}
    </div>
  );
}

export function Tabbar({ active }) {
  const { tab } = useApp();
  const tabs = [
    { k: 'home', go: 'home', icon: 'home', lbl: 'Bosh sahifa' },
    { k: 'chat', go: 'chat-list', icon: 'forum', lbl: 'Chat' },
    { k: 'orders', go: 'orders', icon: 'receipt_long', lbl: 'Buyurtmalarim' },
    { k: 'profile', go: 'profile', icon: 'person', lbl: 'Profil' },
  ];
  return (
    <div className="tabbar">
      {tabs.map((t) => (
        <div key={t.k} className={`tab${t.k === active ? ' on' : ''}`} onClick={() => tab(t.go)}>
          <Icon s={t.icon} />
          <span className="lbl">{t.lbl}</span>
        </div>
      ))}
    </div>
  );
}

export function Cta({ label, icon, onClick, style }) {
  return (
    <div className="press" onClick={onClick} style={{ ...css('height:54px; border-radius:14px; background:var(--accent); display:flex; align-items:center; justify-content:center; gap:8px; font-size:16px; font-weight:700; color:var(--on-accent); box-shadow:0 6px 16px rgba(249,115,22,0.18);'), ...(style || {}) }}>
      {icon && <Icon s={icon} style={{ fontSize: '22px' }} />}{label}
    </div>
  );
}

export function Toast() {
  const { toastMsg, toastOn } = useApp();
  return <div className={`toast${toastOn ? ' show' : ''}`}>{toastMsg}</div>;
}

// Simple monospace placeholder label (matches design's placeholder tiles).
export function Ph({ t, sz = 10 }) {
  return <span style={{ fontFamily: 'monospace', fontSize: sz + 'px', color: 'var(--muted-2)' }}>{t}</span>;
}
