import { useApp } from '../state.jsx';
import { Screen, Header, Icon } from '../components.jsx';
import { css } from '../util.js';

const THEMES = [
  { k: 'system', icon: 'brightness_auto', label: 'Tizim bo\'yicha', sub: 'Telefon sozlamasiga moslashadi' },
  { k: 'light', icon: 'light_mode', label: 'Yorug\'', sub: 'Doimo yorug\' ko\'rinish' },
  { k: 'dark', icon: 'dark_mode', label: 'Tungi', sub: 'Doimo tungi ko\'rinish' },
];

export default function Settings() {
  const { theme, setTheme, toast } = useApp();

  const ThemeRow = ({ k, icon, label, sub, last }) => {
    const on = theme === k;
    return (
      <div className="press" onClick={() => setTheme(k)} style={css(`display:flex; align-items:center; gap:13px; padding:14px 16px; ${last ? '' : 'border-bottom:1px solid var(--border);'}`)}>
        <Icon s={icon} style={{ width: 38, height: 38, flex: 'none', borderRadius: 11, background: on ? 'var(--accentSoft)' : 'var(--fill)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, color: on ? 'var(--accent)' : 'var(--muted)' }} />
        <div style={css('flex:1; min-width:0;')}>
          <div style={css(`font-size:14.5px; font-weight:700; color:${on ? 'var(--text)' : 'var(--text-2)'};`)}>{label}</div>
          <div style={css('font-size:11.5px; font-weight:500; color:var(--muted-2); margin-top:1px;')}>{sub}</div>
        </div>
        <Icon s={on ? 'radio_button_checked' : 'radio_button_unchecked'} fill={on} style={{ fontSize: 22, color: on ? 'var(--accent)' : 'var(--faint)' }} />
      </div>
    );
  };

  const MenuRow = ({ icon, label, right, last }) => (
    <div className="press" onClick={() => toast(label)} style={css(`display:flex; align-items:center; gap:13px; padding:14px 16px; ${last ? '' : 'border-bottom:1px solid var(--border);'}`)}>
      <Icon s={icon} style={{ fontSize: 22, color: 'var(--muted)' }} />
      <span style={css('flex:1; font-size:14.5px; font-weight:700; color:var(--text);')}>{label}</span>
      {right !== undefined ? right : <Icon s="chevron_right" style={{ fontSize: 20, color: 'var(--faint)' }} />}
    </div>
  );

  const Group = ({ title, children }) => (
    <div style={css('padding:18px 18px 0;')}>
      <div style={css('font-size:12px; font-weight:700; color:var(--muted-2); letter-spacing:0.5px; text-transform:uppercase; margin-bottom:10px; padding-left:4px;')}>{title}</div>
      <div style={css('background:var(--surface); border:1px solid var(--border); border-radius:18px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>{children}</div>
    </div>
  );

  return (
    <Screen>
      <Header title="Sozlamalar" back />
      <div className="scroll">
        <Group title="Ko'rinish">
          {THEMES.map((t, i) => <ThemeRow key={t.k} {...t} last={i === THEMES.length - 1} />)}
        </Group>
        <Group title="Umumiy">
          <MenuRow icon="translate" label="Til" right={<span style={css('font-size:13px; font-weight:600; color:var(--muted-2);')}>O'zbekcha</span>} />
          <MenuRow icon="notifications" label="Bildirishnomalar" />
          <MenuRow icon="lock" label="Maxfiylik" last />
        </Group>
        <Group title="Ilova haqida">
          <MenuRow icon="info" label="Versiya" right={<span style={css('font-size:13px; font-weight:600; color:var(--muted-2);')}>1.0.0</span>} />
          <MenuRow icon="help" label="Yordam" last />
        </Group>
        <div style={{ height: 18 }} />
      </div>
    </Screen>
  );
}
