import { useApp } from '../state.jsx';
import { Screen, Header, Cta, Icon, Ph } from '../components.jsx';
import { css, asset, TILE } from '../util.js';
import { SERVICES, DATES, TIMES } from '../data.js';

const BARBERS = [
  { name: 'Salohiddin Barber', rating: '4.9', loc: 'Markaz · 1.2 km', price: '120 000 dan', openBg: 'rgba(28,25,23,0.62)', openLabel: 'Ochiq · 21:00 gacha', photo: 'assets/salohiddin.jpeg', go: 'barber-page' },
  { name: 'Bekzod Pro Barbershop', rating: '4.7', loc: 'Jalaquduq · 2.0 km', price: '100 000 dan', openBg: 'rgba(28,25,23,0.62)', openLabel: 'Ochiq · 20:00 gacha' },
  { name: 'Klassik Sartaroshxona', rating: '4.6', loc: 'Yangiobod · 3.4 km', price: '90 000 dan', openBg: 'rgba(120,113,108,0.72)', openLabel: 'Yopiq · 09:00 da ochiladi' },
];

export function BarberList() {
  const { go, toast } = useApp();
  return (
    <Screen>
      <Header title="Sartaroshxonalar" back />
      <div className="scroll">
        <div style={css('padding:14px 18px 6px; background:#FFFFFF;')}>
          <div style={css('display:flex; align-items:center; gap:10px; height:46px; background:#F4F3F1; border-radius:14px; padding:0 14px;')}><Icon s="search" style={{ fontSize: 21, color: '#A8A29E' }} /><span style={css('font-size:14.5px; font-weight:500; color:#A8A29E;')}>Sartaroshxona qidirish...</span></div>
        </div>
        <div style={css('display:flex; flex-direction:column; gap:12px; padding:14px 18px 18px;')}>
          {BARBERS.map((b, i) => (
            <div key={i} className="press" onClick={() => (b.go ? go(b.go) : toast(b.name))} style={css('background:#FFFFFF; border:1px solid #F1EFED; border-radius:20px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
              <div style={css(`height:120px; position:relative; ${b.photo ? `background-image:url('${asset(b.photo)}'); background-size:cover; background-position:center;` : TILE + ' display:flex; align-items:center; justify-content:center;'}`)}>
                {!b.photo && <Ph t="salon rasm" sz={11} />}
                <div style={css(`position:absolute; left:12px; top:12px; display:flex; align-items:center; height:24px; padding:0 9px; border-radius:7px; background:${b.openBg}; font-size:11px; font-weight:700; color:#FFFFFF;`)}>{b.openLabel}</div>
              </div>
              <div style={css('padding:13px 15px;')}>
                <div style={css('display:flex; align-items:flex-start; justify-content:space-between; gap:8px;')}><span style={css('font-size:16px; font-weight:700; color:#1C1917;')}>{b.name}</span><span style={css('display:flex; align-items:center; gap:3px; font-size:13px; font-weight:700; color:#44403C;')}><Icon s="star" fill style={{ fontSize: 16, color: '#FBBF24' }} />{b.rating}</span></div>
                <div style={css('display:flex; align-items:center; gap:7px; margin-top:7px;')}><span style={css('display:flex; align-items:center; gap:3px; font-size:12.5px; font-weight:500; color:#A8A29E;')}><Icon s="location_on" style={{ fontSize: 15 }} />{b.loc}</span><span style={css('width:3px; height:3px; border-radius:50%; background:#D6D3D1;')} /><span style={css('font-size:12.5px; font-weight:500; color:#A8A29E;')}>{b.price}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

export function BarberPage() {
  const { go, back, toast } = useApp();
  return (
    <Screen>
      <div className="scroll">
        <div style={css(`height:200px; flex:none; position:relative; overflow:hidden; background-image:url('${asset('assets/salohiddin.jpeg')}'); background-size:cover; background-position:center;`)}>
          <span className="press" onClick={back} style={css('position:absolute; left:14px; top:14px; width:38px; height:38px; border-radius:50%; background:rgba(255,255,255,0.92); display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.12);')}><Icon s="arrow_back" style={{ fontSize: 22, color: '#1C1917' }} /></span>
          <span className="press" onClick={() => toast("Sevimlilarga qo'shildi")} style={css('position:absolute; right:14px; top:14px; width:38px; height:38px; border-radius:50%; background:rgba(255,255,255,0.92); display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.12);')}><Icon s="favorite" fill style={{ fontSize: 20, color: 'var(--accent)' }} /></span>
        </div>
        <div style={css('padding:16px 18px 0;')}>
          <div style={css('display:flex; align-items:flex-start; justify-content:space-between; gap:10px;')}>
            <div><div style={css('font-size:20px; font-weight:700; color:#1C1917; letter-spacing:-0.3px;')}>Salohiddin Barber</div><div style={css('display:flex; align-items:center; gap:7px; margin-top:6px;')}><span style={css('display:flex; align-items:center; gap:3px; font-size:13px; font-weight:700; color:#44403C;')}><Icon s="star" fill style={{ fontSize: 16, color: '#FBBF24' }} />4.9</span><span style={css('font-size:12.5px; font-weight:500; color:#A8A29E;')}>(214 baho)</span></div></div>
            <div style={css('flex:none; display:flex; align-items:center; gap:4px; height:26px; padding:0 10px; border-radius:8px; background:#E9FBEF; font-size:12px; font-weight:700; color:#16A34A;')}>Ochiq</div>
          </div>
          <div style={css('display:flex; align-items:center; gap:7px; margin-top:12px; padding:12px 0; border-top:1px solid #F1EFED; border-bottom:1px solid #F1EFED;')}><Icon s="location_on" style={{ fontSize: 19, color: 'var(--accent)' }} /><span style={css('flex:1; font-size:13px; font-weight:500; color:#57534E;')}>Markaz, Bunyodkor ko'chasi 14 · 1.2 km</span><span className="press" onClick={() => toast('Xaritada ochish')} style={css('font-size:12.5px; font-weight:700; color:var(--accentDeep);')}>Xarita</span></div>
        </div>
        <div style={css('padding:18px 18px 0;')}>
          <div style={css('display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;')}><span style={css('font-size:16px; font-weight:700; color:#1C1917;')}>Ishlari</span><span style={css('font-size:12.5px; font-weight:700; color:var(--accentDeep);')}>Barchasi</span></div>
          <div className="hscroll" style={css('display:flex; gap:10px; overflow-x:auto; padding-bottom:2px;')}>
            <div style={css(`flex:none; width:108px; height:140px; border-radius:16px; background-image:url('${asset('assets/salohiddin.jpeg')}'); background-size:cover; background-position:center;`)} />
            {['ish 2', 'ish 3', 'ish 4'].map((w) => (
              <div key={w} style={css('flex:none; width:108px; height:140px; border-radius:16px; background:repeating-linear-gradient(135deg,#EDEBE8,#EDEBE8 9px,#E4E1DD 9px,#E4E1DD 18px); display:flex; align-items:center; justify-content:center;')}><Ph t={w} /></div>
            ))}
          </div>
        </div>
        <div style={css('padding:18px 18px 4px;')}>
          <div style={css('font-size:16px; font-weight:700; color:#1C1917; margin-bottom:6px;')}>Xizmatlar</div>
          <div style={css('display:flex; flex-direction:column;')}>
            {SERVICES.map((s, i) => (
              <div key={i} style={css('display:flex; align-items:center; gap:12px; padding:13px 0; border-bottom:1px solid #F4F3F1;')}><div style={css('flex:1; min-width:0;')}><div style={css('font-size:14px; font-weight:700; color:#1C1917;')}>{s.name}</div><div style={css('font-size:12px; font-weight:500; color:#A8A29E; margin-top:2px;')}>{s.dur}</div></div><div style={css('font-size:13.5px; font-weight:700; color:#44403C; white-space:nowrap;')}>{s.price}</div></div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <Cta label="Band qilish" icon="event" onClick={() => go('barber-book')} />
      </div>
    </Screen>
  );
}

export function BarberBook() {
  const { go, sel, setState } = useApp();
  return (
    <Screen>
      <Header title="Band qilish" back />
      <div className="scroll">
        <div style={css('padding:18px 18px 0;')}>
          <div style={css('font-size:16px; font-weight:700; color:#1C1917; margin-bottom:12px;')}>Sanani tanlang</div>
          <div className="hscroll" style={css('display:flex; gap:9px; overflow-x:auto; padding-bottom:4px;')}>
            {DATES.map((d, i) => {
              const on = i === sel.dateIdx;
              return (
                <div key={i} className="press" onClick={() => setState({ dateIdx: i })} style={css(`flex:none; width:58px; height:72px; border-radius:16px; background:${on ? 'var(--accent)' : '#F4F3F1'}; box-shadow:${on ? '0 5px 12px rgba(249,115,22,0.16)' : 'none'}; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px;`)}>
                  <span style={css(`font-size:12px; font-weight:${on ? '700' : '600'}; color:${on ? 'rgba(255,255,255,0.9)' : '#A8A29E'};`)}>{d.day}</span>
                  <span style={css(`font-size:19px; font-weight:800; color:${on ? '#FFFFFF' : '#44403C'};`)}>{d.num}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div style={css('padding:22px 18px 0;')}>
          <div style={css('font-size:16px; font-weight:700; color:#1C1917; margin-bottom:12px;')}>Vaqtni tanlang</div>
          <div style={css('display:grid; grid-template-columns:repeat(4,1fr); gap:9px;')}>
            {TIMES.map((x, i) => {
              if (x.busy) return <div key={i} style={css('height:44px; border-radius:12px; cursor:not-allowed; background:#F4F3F1; display:flex; align-items:center; justify-content:center; font-size:13.5px; font-weight:600; color:#C7C2BD; text-decoration:line-through;')}>{x.t}</div>;
              const on = x.t === sel.time;
              return <div key={i} className="press" onClick={() => setState({ time: x.t })} style={css(`height:44px; border-radius:12px; background:${on ? 'var(--accent)' : '#FFFFFF'}; border:${on ? 'none' : '1px solid #ECEAE7'}; box-shadow:${on ? '0 4px 10px rgba(249,115,22,0.16)' : 'none'}; display:flex; align-items:center; justify-content:center; font-size:13.5px; font-weight:${on ? '800' : '700'}; color:${on ? '#FFFFFF' : '#44403C'};`)}>{x.t}</div>;
            })}
          </div>
        </div>
        <div style={css('padding:22px 18px 0;')}>
          <div style={css('font-size:16px; font-weight:700; color:#1C1917; margin-bottom:12px;')}>Xizmatni tanlang</div>
          <div style={css('display:flex; flex-direction:column; gap:10px;')}>
            {SERVICES.slice(0, 6).map((s, i) => {
              const on = i === sel.svcIdx;
              return (
                <div key={i} className="press" onClick={() => setState({ svcIdx: i })} style={css(`display:flex; align-items:center; gap:12px; background:${on ? 'var(--accentSoft)' : '#FFFFFF'}; border:${on ? '1.5px solid var(--accent)' : '1px solid #ECEAE7'}; border-radius:15px; padding:13px 14px;`)}>
                  <Icon s={on ? 'check_circle' : 'radio_button_unchecked'} fill={on} style={{ fontSize: 23, color: on ? 'var(--accent)' : '#D6D3D1' }} />
                  <div style={css('flex:1; min-width:0;')}><div style={css(`font-size:14px; font-weight:700; color:${on ? '#1C1917' : '#44403C'};`)}>{s.name}</div><div style={css('font-size:11.5px; font-weight:500; color:#A8A29E; margin-top:2px;')}>{s.dur}</div></div>
                  <div style={css('font-size:13px; font-weight:700; color:#44403C; white-space:nowrap;')}>{s.price}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ height: 18 }} />
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <Cta label="Davom etish" onClick={() => go('barber-confirm')} />
      </div>
    </Screen>
  );
}

export function BarberConfirm() {
  const { sel, toast, tab } = useApp();
  const svc = SERVICES[sel.svcIdx];
  const dateLabel = DATES[sel.dateIdx].label;
  const detRow = (icon, label, val, last) => (
    <div style={css(`display:flex; align-items:center; gap:13px; padding:14px 0; ${last ? '' : 'border-bottom:1px solid #F4F3F1;'}`)}><Icon s={icon} style={{ fontSize: 21, color: 'var(--accent)' }} /><div style={css('flex:1;')}><div style={css('font-size:11.5px; font-weight:600; color:#A8A29E;')}>{label}</div><div style={css('font-size:14px; font-weight:700; color:#1C1917; margin-top:1px;')}>{val}</div></div></div>
  );
  return (
    <Screen>
      <Header title="Tasdiqlash" back />
      <div className="scroll">
        <div style={css('display:flex; align-items:center; gap:13px; padding:16px 18px; background:#FFFFFF; border-bottom:1px solid #F1EFED;')}>
          <div style={css(`width:52px; height:52px; flex:none; border-radius:14px; background-image:url('${asset('assets/salohiddin.jpeg')}'); background-size:cover; background-position:center;`)} />
          <div style={css('flex:1; min-width:0;')}><div style={css('font-size:15.5px; font-weight:700; color:#1C1917;')}>Salohiddin Barber</div><div style={css('font-size:12.5px; font-weight:500; color:#A8A29E; margin-top:2px;')}>Markaz, Bunyodkor ko'chasi 14</div></div>
        </div>
        <div style={css('padding:18px 18px 0;')}>
          <div style={css('font-size:13px; font-weight:700; color:#A8A29E; letter-spacing:0.4px; text-transform:uppercase; margin-bottom:10px; padding-left:2px;')}>Buyurtma tafsilotlari</div>
          <div style={css('background:#FFFFFF; border:1px solid #F1EFED; border-radius:16px; padding:4px 16px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            {detRow('content_cut', 'Xizmat', svc.name)}
            {detRow('event', 'Sana va vaqt', `${dateLabel} · ${sel.time}`)}
            {detRow('schedule', 'Davomiyligi', svc.dur, true)}
          </div>
        </div>
        <div style={css('padding:20px 18px 0;')}>
          <div style={css('font-size:13px; font-weight:700; color:#A8A29E; letter-spacing:0.4px; text-transform:uppercase; margin-bottom:10px; padding-left:2px;')}>To'lov</div>
          <div style={css('background:#FFFFFF; border:1px solid #F1EFED; border-radius:16px; padding:4px 16px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            <div style={css('display:flex; align-items:center; justify-content:space-between; padding:13px 0; border-bottom:1px solid #F4F3F1;')}><span style={css('font-size:13.5px; font-weight:500; color:#78716C;')}>Xizmat narxi</span><span style={css('font-size:13.5px; font-weight:700; color:#1C1917;')}>{svc.price}</span></div>
            <div style={css('display:flex; align-items:center; justify-content:space-between; padding:13px 0;')}><span style={css('font-size:13.5px; font-weight:500; color:#78716C;')}>To'lov usuli</span><span style={css('font-size:13.5px; font-weight:700; color:#1C1917;')}>Joyida · naqd</span></div>
          </div>
        </div>
        <div style={css('padding:18px 18px 20px;')}>
          <div style={css('display:flex; align-items:flex-start; gap:9px; background:var(--accentSoft); border:1px solid #FCD9B6; border-radius:14px; padding:13px 14px;')}><Icon s="info" style={{ fontSize: 19, color: 'var(--accent)' }} /><span style={css('flex:1; font-size:12.5px; font-weight:500; color:#57534E; line-height:1.5;')}>Bandlovni sartarosh tasdiqlaydi. Belgilangan vaqtdan 15 daqiqa oldin yetib boring.</span></div>
        </div>
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <Cta label="Bandlovni tasdiqlash" icon="check" onClick={() => { toast('Bandlov tasdiqlandi ✅'); setTimeout(() => tab('orders'), 700); }} />
      </div>
    </Screen>
  );
}
