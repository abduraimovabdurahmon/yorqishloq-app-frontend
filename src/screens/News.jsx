import { useApp } from '../state.jsx';
import { Screen, Header, Icon, Ph } from '../components.jsx';
import { css } from '../util.js';
import { NEWS } from '../data.js';

export function NewsList() {
  const { go, toast } = useApp();
  const chips = ['Hammasi', 'Mahalliy', "E'lonlar", 'Sport', 'Ogohlantirish'];
  const Featured = ({ n }) => (
    <div className="press" onClick={() => go('news-article')} style={css('display:flex; flex-direction:column; background:var(--surface); border:1px solid var(--border); border-radius:20px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
      <div style={css('height:158px; position:relative; background:repeating-linear-gradient(135deg,var(--tile-b),var(--tile-b) 10px,var(--tile-c) 10px,var(--tile-c) 20px); display:flex; align-items:center; justify-content:center;')}><Ph t={n.img} sz={11} /><div style={css(`position:absolute; left:12px; top:12px; height:24px; padding:0 10px; display:flex; align-items:center; border-radius:7px; background:${n.tagBg}; font-size:11px; font-weight:700; color:var(--on-accent);`)}>{n.tag}</div></div>
      <div style={css('padding:14px 15px 15px;')}>
        <div style={css('font-size:16.5px; font-weight:700; color:var(--text); line-height:1.3;')}>{n.title}</div>
        <div style={css('font-size:13px; font-weight:500; color:var(--muted); line-height:1.5; margin-top:6px;')}>{n.excerpt}</div>
        <div style={css('display:flex; align-items:center; gap:7px; margin-top:11px;')}><span style={css('font-size:11.5px; font-weight:700; color:var(--accentDeep);')}>{n.src}</span><span style={css('width:3px; height:3px; border-radius:50%; background:var(--faint);')} /><span style={css('font-size:11.5px; font-weight:500; color:var(--muted-2);')}>{n.time}</span><span style={css('display:flex; align-items:center; gap:3px; margin-left:auto; font-size:11.5px; font-weight:500; color:var(--muted-2);')}><Icon s="visibility" style={{ fontSize: 14 }} />{n.views}</span></div>
      </div>
    </div>
  );
  const Row = ({ n }) => (
    <div className="press" onClick={() => go('news-article')} style={css('display:flex; gap:13px; background:var(--surface); border:1px solid var(--border); border-radius:18px; padding:12px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
      <div style={css('width:92px; height:92px; flex:none; border-radius:14px; position:relative; background:repeating-linear-gradient(135deg,var(--tile-b),var(--tile-b) 8px,var(--tile-c) 8px,var(--tile-c) 16px); display:flex; align-items:center; justify-content:center;')}><Ph t={n.img} sz={9} /></div>
      <div style={css('flex:1; min-width:0; display:flex; flex-direction:column;')}>
        <div style={css(`align-self:flex-start; height:20px; padding:0 8px; display:flex; align-items:center; border-radius:6px; background:${n.tagBg}; font-size:10px; font-weight:700; color:var(--on-accent);`)}>{n.tag}</div>
        <div style={css('font-size:14px; font-weight:700; color:var(--text); line-height:1.32; margin-top:6px;')}>{n.title}</div>
        <div style={css('display:flex; align-items:center; gap:6px; margin-top:auto;')}><span style={css('font-size:11px; font-weight:600; color:var(--muted-2);')}>{n.src}</span><span style={css('width:3px; height:3px; border-radius:50%; background:var(--faint);')} /><span style={css('font-size:11px; font-weight:500; color:var(--muted-2);')}>{n.time}</span></div>
      </div>
    </div>
  );
  return (
    <Screen>
      <Header title="Yangiliklar" back rightIcon="search" onRight={() => toast('Qidiruv')} />
      <div className="hscroll" style={css('flex:none; display:flex; gap:8px; padding:12px 18px; overflow-x:auto; background:var(--surface); border-bottom:1px solid var(--border);')}>
        {chips.map((c, i) => <div key={c} className="press" style={css(`flex:none; height:34px; padding:0 15px; display:flex; align-items:center; border-radius:11px; background:${i === 0 ? 'var(--accent)' : 'var(--fill)'}; font-size:13px; font-weight:${i === 0 ? '700' : '600'}; color:${i === 0 ? 'var(--surface)' : 'var(--text-3)'};`)}>{c}</div>)}
      </div>
      <div className="scroll" style={{ gap: 14, padding: '16px 18px 18px' }}>
        {NEWS.map((n, i) => (i === 0 ? <Featured key={i} n={n} /> : <Row key={i} n={n} />))}
      </div>
    </Screen>
  );
}

export function NewsArticle() {
  const { toast } = useApp();
  return (
    <Screen>
      <div className="scroll">
        <div style={css('height:228px; flex:none; position:relative; overflow:hidden; background:repeating-linear-gradient(135deg,var(--tile-b),var(--tile-b) 11px,var(--tile-c) 11px,var(--tile-c) 22px); display:flex; align-items:center; justify-content:center;')}>
          <Ph t="yangilik rasm" sz={12} />
          <span className="press" onClick={() => toast('Ulashish')} style={css('position:absolute; right:14px; top:14px; width:38px; height:38px; border-radius:50%; background:var(--glass); display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.12);')}><Icon s="share" style={{ fontSize: 20, color: 'var(--text)' }} /></span>
        </div>
        <div style={css('padding:18px 18px 0;')}>
          <div style={css('align-self:flex-start; display:inline-flex; height:24px; padding:0 10px; align-items:center; border-radius:7px; background:var(--accent); font-size:11px; font-weight:700; color:var(--on-accent);')}>E'lon</div>
          <div style={css('font-size:22px; font-weight:700; color:var(--text); line-height:1.28; letter-spacing:-0.4px; margin-top:12px;')}>Yorqishloqda yangi suv quvuri ishga tushdi</div>
          <div style={css('display:flex; align-items:center; gap:10px; margin-top:14px; padding:13px 0; border-top:1px solid var(--border); border-bottom:1px solid var(--border);')}><Icon s="account_balance" style={{ width: 38, height: 38, flex: 'none', borderRadius: '50%', background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: 'var(--accent)' }} /><div style={css('flex:1; min-width:0;')}><div style={css('font-size:13px; font-weight:700; color:var(--text);')}>Tuman hokimligi</div><div style={css('font-size:11.5px; font-weight:500; color:var(--muted-2);')}>2 soat oldin · 4 daqiqa o'qish</div></div><span style={css('display:flex; align-items:center; gap:3px; font-size:12px; font-weight:500; color:var(--muted-2);')}><Icon s="visibility" style={{ fontSize: 15 }} />1 240</span></div>
        </div>
        <div style={css('padding:16px 18px 0;')}>
          <div style={css('font-size:14.5px; font-weight:500; color:var(--text-2); line-height:1.7;')}>Yorqishloq markazidagi aholi punktlarini toza ichimlik suvi bilan ta'minlash maqsadida qurilgan yangi suv quvuri bugun rasman ishga tushirildi. Loyiha tuman hokimligi mablag'lari hisobidan amalga oshirildi.</div>
          <div style={css('font-size:14.5px; font-weight:500; color:var(--text-2); line-height:1.7; margin-top:14px;')}>Quvur uzunligi 12 kilometrni tashkil etadi va u 1 500 dan ortiq xonadonni uzluksiz suv bilan ta'minlaydi. Aholi avval suvni faqat ma'lum soatlarda olardi.</div>
          <div style={css('background:var(--accentSoft); border-left:3px solid var(--accent); border-radius:0 12px 12px 0; padding:14px 16px; margin-top:16px;')}><div style={css('font-size:14px; font-weight:600; color:var(--text-2); line-height:1.6; font-style:italic;')}>"Endi har bir xonadonga sutkalik toza suv yetib boradi. Bu — uzoq yillik orzu edi," — dedi mahalla raisi.</div></div>
          <div style={css('font-size:14.5px; font-weight:500; color:var(--text-2); line-height:1.7; margin-top:16px;')}>Kelgusi bosqichda qo'shni qishloqlarni ham tarmoqqa ulash rejalashtirilgan. Ishlar yil oxirigacha yakunlanadi.</div>
        </div>
        <div style={css('padding:20px 18px 22px;')}><div style={css('display:flex; align-items:center; gap:8px; flex-wrap:wrap;')}>{['#infratuzilma', '#yorqishloq', '#suv'].map((t) => <div key={t} style={css('height:30px; padding:0 12px; display:flex; align-items:center; border-radius:9px; background:var(--fill); font-size:12px; font-weight:600; color:var(--text-3);')}>{t}</div>)}</div></div>
      </div>
      <div className="footer" style={css('padding:12px 18px 22px; display:flex; align-items:center; gap:10px;')}>
        <div style={css('flex:1; display:flex; align-items:center; gap:7px;')}><span className="press" onClick={() => toast('Yoqdi')}><Icon s="favorite" fill style={{ fontSize: 24, color: 'var(--danger)' }} /></span><span style={css('font-size:14px; font-weight:700; color:var(--text-2);')}>128</span><Icon s="chat_bubble" style={{ fontSize: 23, color: 'var(--muted)', marginLeft: 8 }} /><span style={css('font-size:14px; font-weight:700; color:var(--text-2);')}>24</span></div>
        <div className="press" onClick={() => toast('Saqlandi')} style={css('flex:none; width:48px; height:48px; border-radius:14px; background:var(--accentSoft); display:flex; align-items:center; justify-content:center; color:var(--accent);')}><Icon s="bookmark" style={{ fontSize: 23 }} /></div>
        <div className="press" onClick={() => toast('Ulashish')} style={css('flex:none; width:48px; height:48px; border-radius:14px; background:var(--accent); display:flex; align-items:center; justify-content:center; color:var(--on-accent); box-shadow:0 6px 16px rgba(249,115,22,0.18);')}><Icon s="share" style={{ fontSize: 23 }} /></div>
      </div>
    </Screen>
  );
}
