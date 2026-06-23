import { useApp } from '../state.jsx';
import { Screen, Icon } from '../components.jsx';
import { css } from '../util.js';
import { CHATS } from '../data.js';

export function ChatList() {
  const { go, toast } = useApp();
  return (
    <Screen>
      <div className="hdr">
        <span className="title">Chat</span>
        <span className="act-r" onClick={() => toast('Yangi suhbat')}><Icon s="edit_square" style={{ fontSize: 23, color: 'var(--muted)' }} /></span>
      </div>
      <div style={css('padding:12px 18px 6px; background:var(--surface);')}><div style={css('display:flex; align-items:center; gap:10px; height:44px; background:var(--fill); border-radius:13px; padding:0 14px;')}><Icon s="search" style={{ fontSize: 20, color: 'var(--muted-2)' }} /><span style={css('font-size:14px; font-weight:500; color:var(--muted-2);')}>Suhbat qidirish...</span></div></div>
      <div className="scroll" style={{ padding: '8px 0 12px' }}>
        {CHATS.map((c, i) => {
          const lastColor = c.unread > 0 ? 'var(--text)' : 'var(--muted-2)';
          const lastWeight = c.unread > 0 ? '600' : '500';
          return (
            <div key={i} className="press" onClick={() => go('chat-thread')} style={css('display:flex; align-items:center; gap:13px; padding:11px 18px;')}>
              <div style={css('position:relative; flex:none;')}>
                <Icon s={c.icon} style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 25, color: 'var(--accent)' }} />
                {c.online && <span style={css('position:absolute; right:1px; bottom:1px; width:13px; height:13px; border-radius:50%; background:var(--online); border:2.5px solid var(--bg);')} />}
              </div>
              <div style={css('flex:1; min-width:0; border-bottom:1px solid var(--border); padding-bottom:13px;')}>
                <div style={css('display:flex; align-items:center; gap:8px;')}><span style={css('flex:1; min-width:0; font-size:15px; font-weight:700; color:var(--text); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;')}>{c.name}</span><span style={css('flex:none; font-size:11.5px; font-weight:500; color:var(--muted-2);')}>{c.time}</span></div>
                <div style={css('display:flex; align-items:center; gap:8px; margin-top:4px;')}><span style={css(`flex:1; min-width:0; font-size:13px; font-weight:${lastWeight}; color:${lastColor}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;`)}>{c.last}</span>{c.unread > 0 && <span style={css('flex:none; min-width:20px; height:20px; padding:0 6px; display:flex; align-items:center; justify-content:center; border-radius:10px; background:var(--accent); font-size:11px; font-weight:700; color:var(--on-accent);')}>{c.unread}</span>}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Screen>
  );
}

export function ChatThread() {
  const { toast } = useApp();
  const In = ({ txt, time }) => (
    <div style={css('align-self:flex-start; max-width:78%; background:var(--surface); border-radius:16px 16px 16px 5px; padding:9px 13px; box-shadow:0 1px 4px rgba(0,0,0,0.08);')}><div style={css('font-size:14px; font-weight:500; color:var(--text); line-height:1.4;')}>{txt}</div><div style={css('font-size:10px; font-weight:500; color:var(--muted-2); text-align:right; margin-top:3px;')}>{time}</div></div>
  );
  const Out = ({ txt, time, dbl }) => (
    <div style={css('align-self:flex-end; max-width:78%; background:var(--accent); border-radius:16px 16px 5px 16px; padding:9px 13px; box-shadow:0 1px 4px rgba(249,115,22,0.18);')}><div style={css('font-size:14px; font-weight:500; color:var(--on-accent); line-height:1.4;')}>{txt}</div><div style={css('display:flex; align-items:center; justify-content:flex-end; gap:3px; margin-top:3px;')}><span style={css('font-size:10px; font-weight:500; color:rgba(255,255,255,0.85);')}>{time}</span><Icon s={dbl ? 'done_all' : 'done'} style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)' }} /></div></div>
  );
  return (
    <Screen chat>
      <div style={css('height:60px; flex:none; display:flex; align-items:center; gap:11px; background:var(--surface); border-bottom:1px solid var(--border); padding:0 16px; position:relative;')}>
        <div style={css('position:relative; flex:none;')}><Icon s="delivery_dining" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, color: 'var(--accent)' }} /><span style={css('position:absolute; right:0; bottom:0; width:11px; height:11px; border-radius:50%; background:var(--online); border:2px solid var(--surface);')} /></div>
        <div style={css('flex:1; min-width:0;')}><div style={css('font-size:15px; font-weight:700; color:var(--text);')}>Doniyor (Kuryer)</div><div style={css('font-size:11.5px; font-weight:500; color:var(--success);')}>onlayn</div></div>
        <span className="press" onClick={() => toast("Qo'ng'iroq qilinmoqda…")}><Icon s="call" style={{ fontSize: 23, color: 'var(--accent)' }} /></span>
      </div>
      <div className="scroll" style={{ gap: 9, padding: '16px 14px' }}>
        <div style={css('align-self:center; height:24px; padding:0 12px; display:flex; align-items:center; border-radius:9px; background:var(--chat-chip); font-size:11px; font-weight:600; color:var(--text-3);')}>Bugun</div>
        <div style={css('align-self:center; width:88%; background:var(--surface); border-radius:14px; padding:11px 13px; box-shadow:0 2px 8px rgba(0,0,0,0.06); display:flex; align-items:center; gap:11px;')}><Icon s="storefront" style={{ width: 36, height: 36, flex: 'none', borderRadius: 10, background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, color: 'var(--accent)' }} /><div style={css('flex:1; min-width:0;')}><div style={css('font-size:13px; font-weight:700; color:var(--text);')}>Buyurtma #1043</div><div style={css('font-size:11.5px; font-weight:500; color:var(--muted-2);')}>Okean Market · 41 000 so'm</div></div></div>
        <In txt="Assalomu alaykum! Men buyurtmangizni qabul qildim." time="14:46" />
        <Out txt="Voalaykum assalom! Qancha vaqtda yetib kelasiz?" time="14:47" dbl />
        <In txt="Yo'ldaman, 10 daqiqada yetib boraman 🚗" time="14:48" />
        <Out txt="Rahmat, kutaman 👍" time="14:48" />
      </div>
      <div className="footer" style={css('padding:10px 12px 20px; display:flex; align-items:center; gap:9px;')}>
        <span className="press" onClick={() => toast('Biriktirish')}><Icon s="add_circle" style={{ fontSize: 26, color: 'var(--muted-2)' }} /></span>
        <div style={css('flex:1; min-width:0; display:flex; align-items:center; gap:8px; height:44px; background:var(--fill); border-radius:14px; padding:0 14px;')}><span style={css('flex:1; font-size:14px; font-weight:500; color:var(--muted-2);')}>Xabar yozing...</span><Icon s="mood" style={{ fontSize: 21, color: 'var(--muted-2)' }} /></div>
        <div className="press" onClick={() => toast('Xabar yuborildi')} style={css('flex:none; width:44px; height:44px; border-radius:14px; background:var(--accent); display:flex; align-items:center; justify-content:center; color:var(--on-accent); box-shadow:0 4px 12px rgba(249,115,22,0.2);')}><Icon s="send" style={{ fontSize: 22 }} /></div>
      </div>
    </Screen>
  );
}
