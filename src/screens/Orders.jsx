import { useApp } from '../state.jsx';
import { Screen, Icon } from '../components.jsx';
import { css, mapOrder } from '../util.js';
import { ACTIVE_ORDERS, DONE_ORDERS } from '../data.js';

function Stars({ pct }) {
  return (
    <div style={css('position:relative; display:flex;')}>
      <div style={css('display:flex; gap:1px; color:#E3DFDB;')}>{[0, 1, 2, 3, 4].map((k) => <Icon key={k} s="star" fill style={{ fontSize: 15 }} />)}</div>
      <div style={{ position: 'absolute', left: 0, top: 0, overflow: 'hidden', whiteSpace: 'nowrap', width: pct }}><div style={css('display:flex; gap:1px; color:#FBBF24;')}>{[0, 1, 2, 3, 4].map((k) => <Icon key={k} s="star" fill style={{ fontSize: 15 }} />)}</div></div>
    </div>
  );
}

function OrderCard({ o, onAction }) {
  return (
    <div style={css('background:#FFFFFF; border:1px solid #F1EFED; border-radius:18px; padding:14px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
      <div style={css('display:flex; align-items:flex-start; gap:12px;')}>
        <Icon s={o.icon} style={{ width: 44, height: 44, flex: 'none', borderRadius: 13, background: o.tileBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 23, color: o.tileColor }} />
        <div style={css('flex:1; min-width:0;')}>
          <div style={css('display:flex; align-items:flex-start; justify-content:space-between; gap:8px;')}><span style={css('font-size:15px; font-weight:700; color:#1C1917;')}>{o.title}</span><span style={css(`flex:none; height:22px; padding:0 9px; display:flex; align-items:center; border-radius:7px; background:${o.statusBg}; font-size:11px; font-weight:700; color:${o.statusColor};`)}>{o.status}</span></div>
          <div style={css('font-size:12.5px; font-weight:500; color:#A8A29E; margin-top:3px;')}>{o.sub}</div>
        </div>
      </div>
      <div style={css('display:flex; align-items:center; justify-content:space-between; margin-top:12px; padding-top:12px; border-top:1px solid #F4F3F1;')}><span style={css('display:flex; align-items:center; gap:4px; font-size:12.5px; font-weight:500; color:#78716C;')}><Icon s="schedule" style={{ fontSize: 15 }} />{o.date}</span><span style={css('font-size:15px; font-weight:800; color:#1C1917;')}>{o.price}<span style={css('font-size:11px; font-weight:600; color:#A8A29E;')}>{' '}so'm</span></span></div>
      {o.hasAction && (
        <div className="press" onClick={() => onAction(o.action)} style={css('display:flex; align-items:center; justify-content:center; gap:6px; margin-top:12px; height:42px; border-radius:12px; border:1.5px solid #ECEAE7; font-size:13.5px; font-weight:700; color:var(--accentDeep);')}><Icon s={o.actionIcon} style={{ fontSize: 18 }} />{o.action}</div>
      )}
      {o.rated && (
        <div style={css('display:flex; align-items:center; gap:9px; margin-top:12px; padding-top:12px; border-top:1px solid #F4F3F1;')}><span style={css('font-size:12.5px; font-weight:600; color:#78716C;')}>Bahoyingiz</span><Stars pct={o.starPct} /><span style={css('font-size:12.5px; font-weight:700; color:#44403C;')}>{o.ratingText}</span></div>
      )}
    </div>
  );
}

export default function Orders() {
  const { sel, setState, go, toast } = useApp();
  const active = sel.ordersTab === 'active';
  const orders = (active ? ACTIVE_ORDERS : DONE_ORDERS).map(mapOrder);
  const onAction = (a) => {
    if (a === 'Kuzatish') go('bozor-active');
    else if (a === 'Baholash') toast('Baholash oynasi');
    else toast(a);
  };
  const Tab = ({ k, label, count }) => (
    <div className="press" onClick={() => setState({ ordersTab: k }, true)} style={css(`flex:1; height:38px; display:flex; align-items:center; justify-content:center; gap:6px; border-radius:11px; background:${sel.ordersTab === k ? 'var(--accent)' : '#F4F3F1'}; font-size:13.5px; font-weight:${sel.ordersTab === k ? '700' : '600'}; color:${sel.ordersTab === k ? '#FFFFFF' : '#57534E'};`)}>
      {label}{count && <span style={css('height:18px; min-width:18px; padding:0 5px; display:flex; align-items:center; justify-content:center; border-radius:6px; background:rgba(255,255,255,0.28); font-size:11px; font-weight:700;')}>{count}</span>}
    </div>
  );
  return (
    <Screen>
      <div className="hdr"><span className="title">Buyurtmalarim</span></div>
      <div style={css('display:flex; gap:6px; padding:12px 18px; background:#FFFFFF; border-bottom:1px solid #F1EFED;')}>
        <Tab k="active" label="Faol" count="3" />
        <Tab k="done" label="Yakunlangan" />
      </div>
      <div className="scroll" style={{ gap: 12, padding: '16px 18px 18px' }}>
        {orders.map((o, i) => <OrderCard key={i} o={o} onAction={onAction} />)}
      </div>
    </Screen>
  );
}
