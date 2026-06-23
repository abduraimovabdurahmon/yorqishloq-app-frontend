import { useApp } from '../state.jsx';
import { Screen, Header, Cta, Icon } from '../components.jsx';
import { css } from '../util.js';
import { VEHS, TAXIS } from '../data.js';

function Picker({ title, intro, items, selKey, selIdx, placeholder, ctaLabel, ctaIcon, headerTitle }) {
  const { back, setState, toast } = useApp();
  const sel = items[selIdx];
  return (
    <Screen>
      <Header title={headerTitle} back />
      <div className="scroll">
        <div style={css('padding:16px 18px 0;')}><div style={css('font-size:13.5px; font-weight:500; color:#78716C; line-height:1.55;')}>{intro}</div></div>
        <div style={css('padding:20px 18px 0;')}>
          <div style={css('font-size:16px; font-weight:700; color:#1C1917; margin-bottom:12px;')}>{title}</div>
          <div style={css('display:flex; flex-direction:column; gap:10px;')}>
            {items.map((v, i) => {
              const on = i === selIdx;
              return (
                <div key={i} className="press" onClick={() => setState({ [selKey]: i })} style={css(`display:flex; align-items:center; gap:13px; background:${on ? 'var(--accentSoft)' : '#FFFFFF'}; border:${on ? '1.5px solid var(--accent)' : '1px solid #ECEAE7'}; border-radius:16px; padding:12px 14px;`)}>
                  <Icon s={v.icon} style={{ width: 46, height: 46, flex: 'none', borderRadius: 13, background: on ? 'var(--accent)' : '#F4F3F1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: on ? '#FFFFFF' : '#78716C' }} />
                  <div style={css('flex:1; min-width:0;')}><div style={css(`font-size:14.5px; font-weight:700; color:${on ? '#1C1917' : '#44403C'};`)}>{v.name}</div><div style={css('font-size:11.5px; font-weight:500; color:#A8A29E; margin-top:2px;')}>{v.desc}</div></div>
                  <div style={css('flex:none; text-align:right;')}><div style={css('font-size:12.5px; font-weight:600; color:#78716C;')}>{v.eta}</div></div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={css('padding:20px 18px 20px;')}>
          <div style={css('display:flex; align-items:center; gap:10px; height:50px; background:#FFFFFF; border:1px solid #ECEAE7; border-radius:14px; padding:0 14px;')}><Icon s="place" style={{ fontSize: 20, color: '#A8A29E' }} /><span style={css('font-size:13.5px; font-weight:500; color:#A8A29E;')}>{placeholder}</span></div>
        </div>
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <Cta label={ctaLabel} icon={ctaIcon} onClick={() => { toast(`${sel.name} · ${sel.price} so'm — chaqirildi`); setTimeout(back, 700); }} />
      </div>
    </Screen>
  );
}

export function Kuryer() {
  const { sel } = useApp();
  return (
    <Picker
      headerTitle="Kuryer chaqirish"
      intro="Sizga mos transportni tanlang — kuryer kelib yukingizni kerakli manzilga yetkazadi."
      title="Transport turi"
      items={VEHS}
      selKey="vehIdx"
      selIdx={sel.vehIdx}
      placeholder="Qayerga olib borish kerak? (ixtiyoriy izoh)"
      ctaLabel="Kuryer chaqirish"
      ctaIcon="delivery_dining"
    />
  );
}

export function Taksi() {
  const { sel } = useApp();
  return (
    <Picker
      headerTitle="Taksi chaqirish"
      intro="Qayerga bormoqchisiz? Yo'nalishga mos taksi turini tanlang."
      title="Yo'nalish turi"
      items={TAXIS}
      selKey="taxiIdx"
      selIdx={sel.taxiIdx}
      placeholder="Qayerga? Manzil yoki yo'nalish (ixtiyoriy)"
      ctaLabel="Taksi chaqirish"
      ctaIcon="local_taxi"
    />
  );
}
