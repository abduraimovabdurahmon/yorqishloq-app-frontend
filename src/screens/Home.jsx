import { useApp } from '../state.jsx';
import { Screen, Icon, Ph } from '../components.jsx';
import { css, TILE } from '../util.js';

const SERVICES = [
  { icon: 'storefront', label: 'Bozor', go: 'bozor-shops' },
  { icon: 'delivery_dining', label: 'Kuryer', go: 'kuryer' },
  { icon: 'local_taxi', label: 'Taksi', go: 'taksi' },
  { icon: 'content_cut', label: 'Sartaroshlar', go: 'barber-list', primary: true },
  { icon: 'sell', label: "E'lonlar", go: 'ads-list' },
  { icon: 'newspaper', label: 'Yangiliklar', go: 'news-list' },
];

const PROMOS = [
  { bg: 'var(--accent)', sh: 'rgba(249,115,22,0.16)', tag: 'SARTAROSHXONA', icon: 'content_cut', l1: 'Birinchi soch olishga', l2: '−30% chegirma', sub: 'Yangi sartaroshlarda · 30-iyungacha' },
  { bg: 'var(--accentDeep)', sh: 'rgba(234,88,12,0.16)', tag: 'OKEAN MARKET', icon: 'storefront', l1: "Yog' va guruchga", l2: '−50% chegirma', sub: 'Faqat shu hafta · cheklangan miqdorda' },
  { bg: '#C2410C', sh: 'rgba(194,65,12,0.16)', tag: 'TAKSI', icon: 'local_taxi', l1: 'Ilk safaringizga', l2: '−20% chegirma', sub: 'Promokod kerak emas · avtomatik' },
];

const NEAR = [
  { name: 'Okean Market', rating: '4.8', dist: '0.5 km' },
  { name: 'Oila Market', rating: '4.6', dist: '0.8 km' },
  { name: 'Oyshabegim', rating: '4.9', dist: '1.1 km' },
  { name: 'Uzum Market', rating: '4.7', dist: '1.4 km' },
];

export default function Home() {
  const { go, toast } = useApp();
  return (
    <Screen>
      <div className="hdr"><span className="title">Yorqishloq App</span></div>
      <div className="scroll">
        <div style={css('padding:16px 18px 16px; background:#FFFFFF;')}>
          <div className="press" onClick={() => toast('Qidiruv tez orada')} style={css("display:flex; align-items:center; gap:10px; height:48px; background:#F4F3F1; border-radius:14px; padding:0 14px;")}>
            <Icon s="search" style={{ fontSize: 22, color: '#A8A29E' }} />
            <span style={css('font-size:15px; font-weight:500; color:#A8A29E;')}>Xizmat yoki do'kon qidirish...</span>
          </div>
        </div>

        <div style={css('padding:20px 18px 4px;')}>
          <div style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:14px;')}>
            {SERVICES.map((s) => (
              <div key={s.label} className="press" onClick={() => go(s.go)} style={css('display:flex; flex-direction:column; align-items:center; gap:9px;')}>
                <div style={css(`width:62px; height:62px; border-radius:20px; background:${s.primary ? 'var(--accent)' : 'var(--accentSoft)'}; display:flex; align-items:center; justify-content:center; ${s.primary ? 'box-shadow:0 4px 12px rgba(249,115,22,0.18);' : ''}`)}>
                  <Icon s={s.icon} style={{ fontSize: 30, color: s.primary ? '#FFFFFF' : 'var(--accent)' }} />
                </div>
                <span style={css(`font-size:12.5px; font-weight:${s.primary ? '700' : '600'}; color:${s.primary ? 'var(--accentDeep)' : '#44403C'};`)}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={css('padding:18px 0 4px;')}>
          <div className="hscroll" style={css('display:flex; gap:12px; padding:0 18px; overflow-x:auto; scroll-snap-type:x mandatory; scroll-padding-left:18px;')}>
            {PROMOS.map((p, i) => (
              <div key={i} style={css(`flex:none; width:calc(100% - 36px); scroll-snap-align:start; border-radius:22px; background:${p.bg}; padding:18px 20px; position:relative; overflow:hidden; box-shadow:0 6px 16px ${p.sh};`)}>
                <div style={css('position:absolute; right:-28px; top:-28px; width:120px; height:120px; border-radius:50%; background:rgba(255,255,255,0.16);')} />
                <div style={css('position:absolute; right:14px; bottom:-30px; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.12);')} />
                <div style={css('position:relative;')}>
                  <div style={css('display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:700; color:#FFFFFF; background:rgba(255,255,255,0.22); padding:4px 10px; border-radius:8px; margin-bottom:10px;')}>
                    <Icon s={p.icon} fill style={{ fontSize: 14 }} />{p.tag}
                  </div>
                  <div style={css('font-size:18px; font-weight:700; color:#FFFFFF; line-height:1.25;')}>{p.l1}<br />{p.l2}</div>
                  <div style={css('font-size:13px; font-weight:500; color:rgba(255,255,255,0.92); margin-top:6px;')}>{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={css('display:flex; justify-content:center; gap:6px; margin-top:13px;')}>
            <div style={css('width:20px; height:6px; border-radius:3px; background:var(--accent);')} />
            <div style={css('width:6px; height:6px; border-radius:3px; background:#E3DFDB;')} />
            <div style={css('width:6px; height:6px; border-radius:3px; background:#E3DFDB;')} />
          </div>
        </div>

        <div style={css('padding:20px 0 6px;')}>
          <div style={css('display:flex; align-items:center; justify-content:space-between; padding:0 18px 12px;')}>
            <span style={css('font-size:16px; font-weight:700; color:#1C1917;')}>Yaqin atrofda</span>
            <span className="press" onClick={() => go('bozor-shops')} style={css('font-size:13px; font-weight:600; color:var(--accent);')}>Barchasi</span>
          </div>
          <div className="hscroll" style={css('display:flex; gap:12px; padding:0 18px 4px; overflow-x:auto;')}>
            {NEAR.map((n) => (
              <div key={n.name} className="press" onClick={() => go('bozor-products')} style={css('flex:none; width:150px; border-radius:18px; background:#FFFFFF; box-shadow:0 4px 14px rgba(0,0,0,0.05); overflow:hidden; border:1px solid #F1EFED;')}>
                <div style={css(`height:88px; ${TILE} display:flex; align-items:center; justify-content:center;`)}><Ph t="do'kon foto" /></div>
                <div style={css('padding:10px 12px;')}>
                  <div style={css('font-size:13.5px; font-weight:700; color:#1C1917;')}>{n.name}</div>
                  <div style={css('display:flex; align-items:center; gap:3px; margin-top:4px;')}>
                    <Icon s="star" fill style={{ fontSize: 14, color: '#FBBF24' }} />
                    <span style={css('font-size:12px; font-weight:700; color:#44403C;')}>{n.rating}</span>
                    <span style={css('font-size:12px; font-weight:500; color:#A8A29E;')}>· {n.dist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 14 }} />
      </div>
    </Screen>
  );
}
