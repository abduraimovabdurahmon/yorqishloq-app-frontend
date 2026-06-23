import { useApp } from '../state.jsx';
import { Screen, Header, Icon } from '../components.jsx';
import { css } from '../util.js';

const THEMES = [
  { k: 'system', icon: 'brightness_auto', label: 'Tizim bo\'yicha', sub: 'Telefon sozlamasiga moslashadi' },
  { k: 'light', icon: 'light_mode', label: 'Yorug\'', sub: 'Doimo yorug\' ko\'rinish' },
  { k: 'dark', icon: 'dark_mode', label: 'Tungi', sub: 'Doimo tungi ko\'rinish' },
];

// Labels are marked `.notr` so they always render in their own alphabet,
// regardless of the active language (see src/i18n.js).
const LANGS = [
  { k: 'latin', label: 'O\'zbekcha', sub: 'Lotin alifbosi' },
  { k: 'cyrillic', label: 'Ўзбекча', sub: 'Кирил алифбоси' },
];

export default function Settings() {
  const { theme, setTheme, lang, setLang } = useApp();

  const Option = ({ on, icon, label, sub, onClick, noTr, last }) => (
    <div className="press" onClick={onClick} style={css(`display:flex; align-items:center; gap:13px; padding:14px 16px; ${last ? '' : 'border-bottom:1px solid var(--border);'}`)}>
      <Icon s={icon} style={{ width: 38, height: 38, flex: 'none', borderRadius: 11, background: on ? 'var(--accentSoft)' : 'var(--fill)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, color: on ? 'var(--accent)' : 'var(--muted)' }} />
      <div className={noTr ? 'notr' : ''} style={css('flex:1; min-width:0;')}>
        <div style={css(`font-size:14.5px; font-weight:700; color:${on ? 'var(--text)' : 'var(--text-2)'};`)}>{label}</div>
        <div style={css('font-size:11.5px; font-weight:500; color:var(--muted-2); margin-top:1px;')}>{sub}</div>
      </div>
      <Icon s={on ? 'radio_button_checked' : 'radio_button_unchecked'} fill={on} style={{ fontSize: 22, color: on ? 'var(--accent)' : 'var(--faint)' }} />
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
          {THEMES.map((t, i) => (
            <Option key={t.k} on={theme === t.k} icon={t.icon} label={t.label} sub={t.sub} onClick={() => setTheme(t.k)} last={i === THEMES.length - 1} />
          ))}
        </Group>
        <Group title="Til">
          {LANGS.map((l, i) => (
            <Option key={l.k} on={lang === l.k} icon="language" label={l.label} sub={l.sub} onClick={() => setLang(l.k)} noTr last={i === LANGS.length - 1} />
          ))}
        </Group>
        <div style={{ height: 18 }} />
      </div>
    </Screen>
  );
}
