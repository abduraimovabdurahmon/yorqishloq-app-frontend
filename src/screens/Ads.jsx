import { useApp } from '../state.jsx';
import { Screen, Header, Icon, Ph } from '../components.jsx';
import { css, TILE, TILE_S, TILE_D } from '../util.js';
import { ADS } from '../data.js';

export function AdsList() {
  const { go } = useApp();
  const chips = ['Hammasi', 'Transport', "Ko'chmas mulk", 'Elektronika', "Uy-ro'zg'or"];
  return (
    <Screen>
      <Header title="E'lonlar" back />
      <div className="scroll">
        <div style={css('padding:14px 18px 6px; background:var(--surface);')}><div style={css('display:flex; align-items:center; gap:10px; height:46px; background:var(--fill); border-radius:14px; padding:0 14px;')}><Icon s="search" style={{ fontSize: 21, color: 'var(--muted-2)' }} /><span style={css('font-size:14.5px; font-weight:500; color:var(--muted-2);')}>E'lon qidirish...</span></div></div>
        <div className="hscroll" style={css('flex:none; display:flex; gap:8px; padding:12px 18px 12px; overflow-x:auto; background:var(--surface); border-bottom:1px solid var(--border);')}>
          {chips.map((c, i) => <div key={c} className="press" style={css(`flex:none; height:34px; padding:0 15px; display:flex; align-items:center; border-radius:11px; background:${i === 0 ? 'var(--accent)' : 'var(--fill)'}; font-size:13px; font-weight:${i === 0 ? '700' : '600'}; color:${i === 0 ? 'var(--surface)' : 'var(--text-3)'};`)}>{c}</div>)}
        </div>
        <div style={css('display:grid; grid-template-columns:repeat(2,1fr); gap:13px; padding:16px 18px 20px; align-items:start;')}>
          {ADS.map((a, i) => (
            <div key={i} className="press" onClick={() => go('ad-detail')} style={css('border-radius:18px; background:var(--surface); border:1px solid var(--border); box-shadow:0 4px 14px rgba(0,0,0,0.04); overflow:hidden;')}>
              <div style={css(`position:relative; height:124px; ${TILE} display:flex; align-items:center; justify-content:center;`)}>
                <Ph t={a.img} />
                <div style={css(`position:absolute; left:9px; top:9px; display:${a.top ? 'flex' : 'none'}; align-items:center; height:21px; padding:0 8px; border-radius:7px; background:var(--accent); font-size:10px; font-weight:700; color:var(--on-accent); letter-spacing:0.4px;`)}>TOP</div>
                <Icon s="favorite" fill={a.fav} style={{ position: 'absolute', right: 8, top: 8, width: 29, height: 29, borderRadius: '50%', background: 'var(--glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, color: a.fav ? 'var(--accent)' : 'var(--muted)', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }} />
              </div>
              <div style={css('padding:11px 12px 12px;')}>
                <div style={css('font-size:15px; font-weight:700; color:var(--text); white-space:nowrap;')}>{a.price}<span style={css('font-size:11px; font-weight:600; color:var(--muted-2);')}>{' '}so'm</span></div>
                <div style={css('font-size:12.5px; font-weight:600; color:var(--text-3); margin-top:3px; line-height:1.35; min-height:34px;')}>{a.title}</div>
                <div style={css('display:flex; align-items:center; gap:3px; margin-top:7px;')}><Icon s="location_on" style={{ fontSize: 13, color: 'var(--muted-2)' }} /><span style={css('font-size:11.5px; font-weight:500; color:var(--muted-2);')}>{a.loc} · {a.time}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

export function AdDetail() {
  const { go, toast } = useApp();
  const thumb = (n, on) => (
    <div key={n} style={css(`flex:none; width:62px; height:62px; border-radius:12px; border:${on ? '2px solid var(--accent)' : '1px solid var(--border-2)'}; ${on ? 'background:repeating-linear-gradient(135deg,var(--tile-b),var(--tile-b) 7px,var(--tile-c) 7px,var(--tile-c) 14px);' : TILE_S} display:flex; align-items:center; justify-content:center;`)}><Ph t={String(n)} sz={9} /></div>
  );
  const det = (k, v, last) => (
    <div style={css(`display:flex; align-items:center; justify-content:space-between; padding:12px 15px; ${last ? '' : 'border-bottom:1px solid var(--fill);'}`)}><span style={css('font-size:13.5px; font-weight:500; color:var(--muted);')}>{k}</span><span style={css('font-size:13.5px; font-weight:700; color:var(--text);')}>{v}</span></div>
  );
  return (
    <Screen>
      <div className="scroll">
        <div style={css(`height:262px; flex:none; position:relative; overflow:hidden; ${TILE_D} display:flex; align-items:center; justify-content:center;`)}>
          <Ph t="avto rasm 1" sz={12} />
          <div style={css('position:absolute; right:14px; top:14px; display:flex; gap:9px;')}>
            <span className="press" onClick={() => toast('Ulashish')} style={css('width:38px; height:38px; border-radius:50%; background:var(--glass); display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.12);')}><Icon s="share" style={{ fontSize: 20, color: 'var(--text)' }} /></span>
            <span className="press" onClick={() => toast("Sevimlilarga qo'shildi")} style={css('width:38px; height:38px; border-radius:50%; background:var(--glass); display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.12);')}><Icon s="favorite" fill style={{ fontSize: 20, color: 'var(--accent)' }} /></span>
          </div>
          <div style={css('position:absolute; right:14px; bottom:14px; height:26px; padding:0 11px; display:flex; align-items:center; gap:5px; border-radius:8px; background:rgba(28,25,23,0.62); font-size:12px; font-weight:700; color:var(--on-accent);')}><Icon s="image" style={{ fontSize: 15 }} />1 / 5</div>
        </div>
        <div className="hscroll" style={css('flex:none; display:flex; gap:8px; padding:12px 18px 2px; overflow-x:auto;')}>{[1, 2, 3, 4, 5].map((n) => thumb(n, n === 1))}</div>
        <div style={css('padding:16px 18px 0;')}>
          <div style={css('font-size:25px; font-weight:800; color:var(--text); letter-spacing:-0.5px; white-space:nowrap;')}>165 000 000<span style={css('font-size:15px; font-weight:700; color:var(--muted);')}>{' '}so'm</span></div>
          <div style={css('font-size:17px; font-weight:700; color:var(--text); margin-top:6px; line-height:1.3;')}>Chevrolet Cobalt, 2022</div>
          <div style={css('display:flex; align-items:center; gap:9px; margin-top:10px; flex-wrap:wrap;')}><span style={css('display:flex; align-items:center; gap:3px; font-size:12.5px; font-weight:500; color:var(--muted-2);')}><Icon s="location_on" style={{ fontSize: 15 }} />Yorqishloq</span><span style={css('width:3px; height:3px; border-radius:50%; background:var(--faint);')} /><span style={css('font-size:12.5px; font-weight:500; color:var(--muted-2);')}>2 soat oldin</span><span style={css('width:3px; height:3px; border-radius:50%; background:var(--faint);')} /><span style={css('display:flex; align-items:center; gap:3px; font-size:12.5px; font-weight:500; color:var(--muted-2);')}><Icon s="visibility" style={{ fontSize: 15 }} />342</span></div>
        </div>
        <div style={css('padding:20px 18px 0;')}>
          <div style={css('font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;')}>Tavsilotlar</div>
          <div style={css('background:var(--surface); border:1px solid var(--border); border-radius:16px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            {det('Yil', '2022')}{det('Yurgan masofa', '45 000 km')}{det("Yoqilg'i turi", 'Benzin · Metan')}{det('Uzatmalar qutisi', 'Avtomat')}{det('Holati', "A'lo", true)}
          </div>
        </div>
        <div style={css('padding:20px 18px 0;')}>
          <div style={css('font-size:16px; font-weight:700; color:var(--text); margin-bottom:10px;')}>Tavsif</div>
          <div style={css('font-size:13.5px; font-weight:500; color:var(--text-3); line-height:1.65;')}>2022-yilda olingan, faqat o'zim yurganman. Avtomobil avariyaga tushmagan, to'liq bo'yoqsiz. Saloni toza saqlangan, dvigatel va xodovoy ideal holatda. Hujjatlari joyida — real xaridorga ozgina kelishish mumkin.</div>
        </div>
        <div style={css('padding:20px 18px 0;')}>
          <div style={css('font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;')}>Sotuvchi bilan bog'lanish</div>
          <div style={css('background:var(--surface); border:1px solid var(--border); border-radius:16px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            <div style={css('display:flex; align-items:center; gap:13px; padding:14px 15px; border-bottom:1px solid var(--fill);')}><div style={css('width:46px; height:46px; flex:none; border-radius:50%; background:var(--accent); display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:700; color:var(--on-accent);')}>J</div><div style={css('flex:1; min-width:0;')}><div style={css('font-size:15px; font-weight:700; color:var(--text);')}>Jasurbek To'rayev</div><div style={css('font-size:12px; font-weight:500; color:var(--muted-2); margin-top:2px;')}>A'zo: 2023-yildan · 12 ta e'lon</div></div><Icon s="chevron_right" style={{ fontSize: 20, color: 'var(--faint)' }} /></div>
            <div className="press" onClick={() => toast('+998 90 123 45 67 nusxalandi')} style={css('display:flex; align-items:center; gap:13px; padding:14px 15px; border-bottom:1px solid var(--fill);')}><Icon s="call" style={{ width: 40, height: 40, flex: 'none', borderRadius: 12, background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: 'var(--accent)' }} /><div style={css('flex:1; min-width:0;')}><div style={css('font-size:11.5px; font-weight:600; color:var(--muted-2);')}>Telefon raqam</div><div style={css('font-size:14.5px; font-weight:700; color:var(--text); margin-top:1px;')}>+998 90 123 45 67</div></div><Icon s="content_copy" style={{ fontSize: 19, color: 'var(--muted-2)' }} /></div>
            <div className="press" onClick={() => toast('@cobalt_seller')} style={css('display:flex; align-items:center; gap:13px; padding:14px 15px;')}><Icon s="alternate_email" style={{ width: 40, height: 40, flex: 'none', borderRadius: 12, background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: 'var(--accent)' }} /><div style={css('flex:1; min-width:0;')}><div style={css('font-size:11.5px; font-weight:600; color:var(--muted-2);')}>Telegram</div><div style={css('font-size:14.5px; font-weight:700; color:var(--text); margin-top:1px;')}>@cobalt_seller</div></div><Icon s="open_in_new" style={{ fontSize: 19, color: 'var(--muted-2)' }} /></div>
          </div>
        </div>
        <div style={{ height: 18 }} />
      </div>
      <div className="footer" style={css('padding:12px 18px 22px; display:flex; gap:10px;')}>
        <div className="press" onClick={() => toast("Qo'ng'iroq qilinmoqda…")} style={css('flex:1; height:52px; border-radius:14px; background:var(--accent); display:flex; align-items:center; justify-content:center; gap:8px; font-size:16px; font-weight:700; color:var(--on-accent); box-shadow:0 6px 16px rgba(249,115,22,0.18);')}><Icon s="call" style={{ fontSize: 22 }} />Qo'ng'iroq qilish</div>
        <div className="press" onClick={() => go('chat-thread')} style={css('flex:none; width:52px; height:52px; border-radius:14px; border:1.5px solid var(--border-2); display:flex; align-items:center; justify-content:center; color:var(--accent);')}><Icon s="send" style={{ fontSize: 24 }} /></div>
      </div>
    </Screen>
  );
}
