import { useApp } from '../state.jsx';
import { Screen, Header, Cta, Icon, Ph } from '../components.jsx';
import { css, TILE, TILE_S } from '../util.js';
import { SHOPS, PRODUCTS } from '../data.js';

function Chips({ items, padding }) {
  return (
    <div className="hscroll" style={css(`flex:none; display:flex; gap:8px; ${padding}; overflow-x:auto; background:var(--surface); border-bottom:1px solid var(--border);`)}>
      {items.map((c, i) => (
        <div key={c} className="press" style={css(`flex:none; height:34px; padding:0 15px; display:flex; align-items:center; border-radius:11px; background:${i === 0 ? 'var(--accent)' : 'var(--fill)'}; font-size:13px; font-weight:${i === 0 ? '700' : '600'}; color:${i === 0 ? 'var(--surface)' : 'var(--text-3)'};`)}>{c}</div>
      ))}
    </div>
  );
}

export function BozorShops() {
  const { go } = useApp();
  return (
    <Screen>
      <Header title="Bozor" back />
      <div className="scroll">
        <div style={css('padding:14px 18px 6px; background:var(--surface);')}>
          <div style={css('display:flex; align-items:center; gap:10px; height:46px; background:var(--fill); border-radius:14px; padding:0 14px;')}>
            <Icon s="search" style={{ fontSize: 21, color: 'var(--muted-2)' }} />
            <span style={css('font-size:14.5px; font-weight:500; color:var(--muted-2);')}>Do'kon yoki mahsulot qidirish...</span>
          </div>
        </div>
        <Chips items={['Hammasi', 'Oziq-ovqat', 'Mevalar', "Go'sht", 'Ichimliklar']} padding="padding:12px 18px 12px" />
        <div style={css('display:flex; flex-direction:column; gap:12px; padding:14px 18px 18px;')}>
          {SHOPS.map((s, i) => (
            <div key={i} className="press" onClick={() => go('bozor-products')} style={css('display:flex; gap:13px; background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:13px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
              <div style={css(`width:74px; height:74px; flex:none; border-radius:16px; ${TILE_S} display:flex; align-items:center; justify-content:center;`)}><Ph t={s.img} sz={9} /></div>
              <div style={css('flex:1; min-width:0;')}>
                <div style={css('font-size:15.5px; font-weight:700; color:var(--text);')}>{s.name}</div>
                <div style={css('display:flex; align-items:center; gap:4px; margin-top:5px;')}>
                  <Icon s="star" fill style={{ fontSize: 15, color: 'var(--star)' }} />
                  <span style={css('font-size:13px; font-weight:700; color:var(--text-2);')}>{s.rating}</span>
                  <span style={css('font-size:12.5px; font-weight:500; color:var(--muted-2);')}>({s.reviews})</span>
                </div>
                <div style={css('display:flex; align-items:center; gap:6px; margin-top:7px;')}>
                  <span style={css('display:flex; align-items:center; gap:3px; font-size:12px; font-weight:600; color:var(--muted);')}><Icon s="schedule" style={{ fontSize: 14 }} />{s.time}</span>
                  <span style={css('width:3px; height:3px; border-radius:50%; background:var(--faint);')} />
                  <span style={css('font-size:12px; font-weight:600; color:var(--muted);')}>Min {s.min}</span>
                </div>
                <div style={css('display:flex; align-items:center; gap:4px; margin-top:7px;')}>
                  <Icon s="delivery_dining" style={{ fontSize: 15, color: 'var(--accent)' }} />
                  <span style={css('font-size:12px; font-weight:700; color:var(--accentDeep);')}>{s.delivery}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

export function BozorProducts() {
  const { go, toast } = useApp();
  return (
    <Screen>
      <Header title="Okean Market" back rightIcon="search" onRight={() => toast('Qidiruv')} />
      <div className="scroll">
        <div style={css('display:flex; align-items:center; gap:7px; padding:11px 18px; background:var(--surface); flex-wrap:wrap;')}>
          <span style={css('display:flex; align-items:center; gap:3px; font-size:12.5px; font-weight:700; color:var(--text-2);')}><Icon s="star" fill style={{ fontSize: 15, color: 'var(--star)' }} />4.8</span>
          <span style={css('width:3px; height:3px; border-radius:50%; background:var(--faint);')} />
          <span style={css('font-size:12.5px; font-weight:500; color:var(--muted);')}>20–30 daq</span>
          <span style={css('width:3px; height:3px; border-radius:50%; background:var(--faint);')} />
          <span style={css('font-size:12.5px; font-weight:500; color:var(--muted);')}>Min 30 000 so'm</span>
          <span style={css('display:flex; align-items:center; gap:3px; margin-left:auto; font-size:12px; font-weight:700; color:var(--accentDeep);')}><Icon s="delivery_dining" style={{ fontSize: 15 }} />Bepul</span>
        </div>
        <Chips items={['Hammasi', 'Sabzavotlar', 'Mevalar', 'Sut', 'Ichimliklar']} padding="padding:8px 18px 12px" />
        <div style={css('display:grid; grid-template-columns:repeat(2,1fr); gap:13px; padding:16px 18px 20px; align-items:start;')}>
          {PRODUCTS.map((p, i) => (
            <div key={i} style={css('border-radius:18px; background:var(--surface); border:1px solid var(--border); box-shadow:0 4px 14px rgba(0,0,0,0.04); overflow:hidden;')}>
              <div style={css(`position:relative; height:104px; ${TILE} display:flex; align-items:center; justify-content:center;`)}>
                <Ph t={p.img} />
                <div className="press" onClick={() => toast(`${p.name} savatga qo'shildi`)} style={css('position:absolute; right:9px; bottom:-15px; width:34px; height:34px; border-radius:11px; background:var(--accent); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 10px rgba(249,115,22,0.25);')}><Icon s="add" style={{ fontSize: 21, color: 'var(--on-accent)' }} /></div>
              </div>
              <div style={css('padding:18px 12px 12px;')}>
                <div style={css('font-size:15px; font-weight:700; color:var(--text); white-space:nowrap;')}>{p.price}<span style={css('font-size:11px; font-weight:600; color:var(--muted-2);')}>{' '}so'm</span></div>
                <div style={css('font-size:13px; font-weight:600; color:var(--text-2); margin-top:3px;')}>{p.name}</div>
                <div style={css('font-size:11.5px; font-weight:500; color:var(--muted-2); margin-top:1px;')}>{p.weight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <div style={css('display:flex; align-items:center; gap:7px; margin-bottom:8px; padding:0 2px;')}>
          <Icon s="local_shipping" style={{ fontSize: 18, color: 'var(--accent)' }} />
          <span style={css('flex:1; font-size:12px; font-weight:600; color:var(--text-3);')}>Tekin yetkazishgacha <span style={css('color:var(--accentDeep); font-weight:800;')}>9 000 so'm</span> qoldi</span>
        </div>
        <div style={css('height:6px; border-radius:3px; background:var(--border); overflow:hidden; margin-bottom:12px;')}><div style={css('height:100%; width:82%; border-radius:3px; background:var(--accent);')} /></div>
        <div className="press" onClick={() => go('bozor-cart')} style={css('height:54px; border-radius:14px; background:var(--accent); display:flex; align-items:center; padding:0 16px; gap:12px; box-shadow:0 6px 16px rgba(249,115,22,0.18);')}>
          <Icon s="shopping_cart" style={{ fontSize: 24, color: 'var(--on-accent)' }} />
          <span style={css('flex:1; font-size:15px; font-weight:700; color:var(--on-accent);')}>Savatcha · 3 mahsulot</span>
          <span style={css('font-size:16px; font-weight:700; color:var(--on-accent);')}>41 000 so'm</span>
        </div>
      </div>
    </Screen>
  );
}

const CART = [
  { img: 'pomidor', name: 'Pomidor', sub: "12 000 so'm / 1 kg", price: '12 000' },
  { img: 'olma', name: 'Olma', sub: "18 000 so'm / 1 kg", price: '18 000' },
  { img: 'sut', name: 'Sut 2.5%', sub: "11 000 so'm / 1 L", price: '11 000' },
];

export function BozorCart() {
  const { go, toast } = useApp();
  return (
    <Screen>
      <Header title="Savatcha" back rightIcon="delete" onRight={() => toast('Savatcha tozalandi')} />
      <div className="scroll">
        <div style={css('display:flex; align-items:center; gap:8px; padding:13px 18px; background:var(--surface); border-bottom:1px solid var(--border);')}>
          <Icon s="storefront" style={{ fontSize: 19, color: 'var(--accent)' }} />
          <span style={css('font-size:14px; font-weight:700; color:var(--text);')}>Okean Market</span>
          <span style={css('margin-left:auto; font-size:12.5px; font-weight:600; color:var(--muted-2);')}>3 mahsulot</span>
        </div>
        <div style={css('display:flex; flex-direction:column; gap:11px; padding:16px 18px 6px;')}>
          {CART.map((it, i) => (
            <div key={i} style={css('display:flex; align-items:center; gap:12px; background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:11px 12px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
              <div style={css(`width:56px; height:56px; flex:none; border-radius:13px; ${TILE_S} display:flex; align-items:center; justify-content:center;`)}><Ph t={it.img} sz={9} /></div>
              <div style={css('flex:1; min-width:0;')}><div style={css('font-size:14px; font-weight:700; color:var(--text);')}>{it.name}</div><div style={css('font-size:12px; font-weight:500; color:var(--muted-2); margin-top:2px;')}>{it.sub}</div></div>
              <div style={css('display:flex; flex-direction:column; align-items:flex-end; gap:7px;')}>
                <span style={css('font-size:14px; font-weight:700; color:var(--text);')}>{it.price}</span>
                <div style={css('display:flex; align-items:center; border:1px solid var(--border-2); border-radius:10px; overflow:hidden;')}>
                  <div className="press" onClick={() => toast("Miqdor o'zgartirildi")} style={css('width:30px; height:30px; display:flex; align-items:center; justify-content:center; color:var(--muted);')}><Icon s="remove" style={{ fontSize: 18 }} /></div>
                  <div style={css('min-width:24px; text-align:center; font-size:13px; font-weight:700; color:var(--text);')}>1</div>
                  <div className="press" onClick={() => toast("Miqdor o'zgartirildi")} style={css('width:30px; height:30px; display:flex; align-items:center; justify-content:center; background:var(--accent); color:var(--on-accent);')}><Icon s="add" style={{ fontSize: 18 }} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={css('padding:14px 18px 18px;')}>
          <SummaryCard />
        </div>
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <Cta label="Rasmiylashtirish · 41 000 so'm" onClick={() => go('bozor-checkout')} />
      </div>
    </Screen>
  );
}

function SummaryCard() {
  return (
    <div style={css('background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:4px 16px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
      <div style={css('display:flex; align-items:center; justify-content:space-between; padding:13px 0; border-bottom:1px solid var(--fill);')}><span style={css('font-size:13.5px; font-weight:500; color:var(--muted);')}>Mahsulotlar (3 ta)</span><span style={css('font-size:13.5px; font-weight:700; color:var(--text);')}>41 000 so'm</span></div>
      <div style={css('display:flex; align-items:center; justify-content:space-between; padding:13px 0;')}><span style={css('font-size:13.5px; font-weight:500; color:var(--muted);')}>Yetkazib berish</span><span style={css('font-size:13.5px; font-weight:700; color:var(--success);')}>Bepul</span></div>
      <div style={css('display:flex; align-items:center; justify-content:space-between; padding:13px 0; border-top:1px solid var(--fill);')}><span style={css('font-size:14px; font-weight:700; color:var(--text-2);')}>Jami</span><span style={css('font-size:17px; font-weight:800; color:var(--accentDeep);')}>41 000 so'm</span></div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={css('padding:18px 18px 0;')}>
      <div style={css('font-size:13px; font-weight:700; color:var(--muted-2); letter-spacing:0.4px; text-transform:uppercase; margin-bottom:10px; padding-left:2px;')}>{title}</div>
      {children}
    </div>
  );
}

export function BozorCheckout() {
  const { go, toast } = useApp();
  return (
    <Screen>
      <Header title="Rasmiylashtirish" back />
      <div className="scroll">
        <Section title="Yetkazib berish manzili">
          <div style={css('display:flex; align-items:center; gap:13px; background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:14px 15px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            <Icon s="home" style={{ width: 40, height: 40, flex: 'none', borderRadius: 12, background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, color: 'var(--accent)' }} />
            <div style={css('flex:1; min-width:0;')}><div style={css('font-size:14.5px; font-weight:700; color:var(--text);')}>Uy</div><div style={css('font-size:12.5px; font-weight:500; color:var(--muted-2); margin-top:2px;')}>Yorqishloq, Jalaquduq, 7-uy</div></div>
            <span className="press" onClick={() => toast('Manzilni tahrirlash')} style={css('font-size:12.5px; font-weight:700; color:var(--accentDeep);')}>O'zgartirish</span>
          </div>
        </Section>
        <Section title="Yetkazib berish vaqti">
          <div style={css('display:flex; flex-direction:column; gap:10px;')}>
            <div style={css('display:flex; align-items:center; gap:12px; background:var(--accentSoft); border:1.5px solid var(--accent); border-radius:14px; padding:13px 14px;')}><Icon s="bolt" fill style={{ fontSize: 22, color: 'var(--accent)' }} /><div style={css('flex:1;')}><div style={css('font-size:14px; font-weight:700; color:var(--text);')}>Imkon qadar tez</div><div style={css('font-size:11.5px; font-weight:500; color:var(--muted-2); margin-top:1px;')}>30–40 daqiqa</div></div><Icon s="radio_button_checked" fill style={{ fontSize: 22, color: 'var(--accent)' }} /></div>
            <div style={css('display:flex; align-items:center; gap:12px; background:var(--surface); border:1px solid var(--border-2); border-radius:14px; padding:13px 14px;')}><Icon s="schedule" style={{ fontSize: 22, color: 'var(--muted-2)' }} /><div style={css('flex:1;')}><div style={css('font-size:14px; font-weight:700; color:var(--text-2);')}>Belgilangan vaqtga</div><div style={css('font-size:11.5px; font-weight:500; color:var(--muted-2); margin-top:1px;')}>Vaqtni tanlang</div></div><Icon s="radio_button_unchecked" style={{ fontSize: 22, color: 'var(--faint)' }} /></div>
          </div>
        </Section>
        <Section title="To'lov usuli">
          <div style={css('background:var(--surface); border:1px solid var(--border); border-radius:16px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            <PayRow icon="payments" label="Naqd pul" on />
            <PayRow icon="credit_card" label="Bank kartasi · UzCard / Humo" />
            <PayRow icon="qr_code_2" label="Click / Payme" last />
          </div>
        </Section>
        <Section title="Kuryerga izoh">
          <div style={css('display:flex; align-items:center; gap:10px; height:50px; background:var(--surface); border:1px solid var(--border-2); border-radius:14px; padding:0 14px;')}><Icon s="edit_note" style={{ fontSize: 20, color: 'var(--muted-2)' }} /><span style={css('font-size:13.5px; font-weight:500; color:var(--muted-2);')}>Masalan: eshik oldida qoldiring</span></div>
        </Section>
        <div style={css('padding:20px 18px 18px;')}><SummaryCard /></div>
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <Cta label="Buyurtma berish · 41 000 so'm" onClick={() => go('bozor-sent')} />
      </div>
    </Screen>
  );
}

function PayRow({ icon, label, on = false, last = false }) {
  return (
    <div style={css(`display:flex; align-items:center; gap:13px; padding:13px 15px; ${last ? '' : 'border-bottom:1px solid var(--fill);'}`)}>
      <Icon s={icon} style={{ width: 38, height: 38, flex: 'none', borderRadius: 11, background: on ? 'var(--accentSoft)' : 'var(--fill)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: on ? 'var(--accent)' : 'var(--muted)' }} />
      <span style={css(`flex:1; font-size:14px; font-weight:700; color:${on ? 'var(--text)' : 'var(--text-2)'};`)}>{label}</span>
      <Icon s={on ? 'radio_button_checked' : 'radio_button_unchecked'} fill={on} style={{ fontSize: 21, color: on ? 'var(--accent)' : 'var(--faint)' }} />
    </div>
  );
}

export function BozorSent() {
  const { tab } = useApp();
  const steps = [
    { ico: 'check_circle', col: 'var(--accent)', line: 'var(--accent)', t: 'Buyurtma yuborildi', sub: 'Bugun · 14:32', subCol: 'var(--muted-2)' },
    { ico: 'radio_button_checked', col: 'var(--accent)', line: 'var(--border-2)', t: 'Operator tasdiqlashi', sub: "Qo'ng'iroq kutilmoqda…", subCol: 'var(--accentDeep)', subWeight: 600 },
  ];
  return (
    <Screen>
      <Header title="Buyurtma #1043" back onBackTo="home" />
      <div className="scroll">
        <div style={css('margin:16px 18px 0; background:var(--accentSoft); border:1px solid var(--accentSoftBorder); border-radius:18px; padding:16px; display:flex; gap:13px; align-items:flex-start;')}>
          <Icon s="call" fill style={{ width: 46, height: 46, flex: 'none', borderRadius: '50%', background: 'var(--accent)', color: 'var(--on-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 25 }} />
          <div style={css('flex:1;')}>
            <div style={css('display:flex; align-items:center; gap:8px; flex-wrap:wrap;')}><span style={css('font-size:16px; font-weight:700; color:var(--text);')}>Tasdiqlanmoqda</span><span style={css('height:20px; padding:0 8px; display:flex; align-items:center; border-radius:6px; background:var(--accent); font-size:10px; font-weight:700; color:var(--on-accent); letter-spacing:0.3px;')}>KUTILMOQDA</span></div>
            <div style={css('font-size:12.5px; font-weight:500; color:var(--muted); line-height:1.55; margin-top:5px;')}>Do'kon operatori tez orada qo'ng'iroq qilib buyurtmangizni tasdiqlaydi. Tasdiqlangandan so'ng buyurtma faol holatga o'tadi.</div>
          </div>
        </div>
        <div style={css('margin:16px 18px 0; background:var(--surface); border:1px solid var(--border); border-radius:18px; padding:16px 16px 2px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
          {steps.map((s, i) => (
            <div key={i} style={css('display:flex; gap:12px;')}>
              <div style={css('display:flex; flex-direction:column; align-items:center; align-self:stretch;')}><Icon s={s.ico} fill style={{ fontSize: 24, color: s.col }} /><div style={css(`width:2px; flex:1; min-height:16px; background:${s.line}; margin:3px 0;`)} /></div>
              <div style={css('padding-bottom:16px;')}><div style={css('font-size:14px; font-weight:700; color:var(--text);')}>{s.t}</div><div style={css(`font-size:12px; font-weight:${s.subWeight || 500}; color:${s.subCol}; margin-top:2px;`)}>{s.sub}</div></div>
            </div>
          ))}
          <div style={css('display:flex; gap:12px;')}>
            <div style={css('display:flex; flex-direction:column; align-items:center;')}><Icon s="radio_button_unchecked" style={{ fontSize: 24, color: 'var(--faint)' }} /></div>
            <div style={css('padding-bottom:16px;')}><div style={css('font-size:14px; font-weight:700; color:var(--muted-2);')}>Yetkazib berish</div><div style={css('font-size:12px; font-weight:500; color:var(--text-faint); margin-top:2px;')}>~30–40 daqiqa</div></div>
          </div>
        </div>
        <OrderRecap rows={[['Manzil', 'Uy · Jalaquduq']]} />
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <div className="press" onClick={() => tab('home')} style={css('height:52px; border-radius:14px; background:var(--surface); border:1.5px solid var(--border-2); display:flex; align-items:center; justify-content:center; gap:8px; font-size:15px; font-weight:700; color:var(--text-2);')}><Icon s="home" style={{ fontSize: 20, color: 'var(--accent)' }} />Bosh sahifaga qaytish</div>
      </div>
    </Screen>
  );
}

function OrderRecap({ rows }) {
  return (
    <div style={css('margin:16px 18px 18px; background:var(--surface); border:1px solid var(--border); border-radius:18px; padding:4px 16px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
      <div style={css('display:flex; align-items:center; gap:13px; padding:14px 0; border-bottom:1px solid var(--fill);')}><Icon s="storefront" style={{ width: 40, height: 40, flex: 'none', borderRadius: 12, background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, color: 'var(--accent)' }} /><div style={css('flex:1;')}><div style={css('font-size:14.5px; font-weight:700; color:var(--text);')}>Okean Market</div><div style={css('font-size:12px; font-weight:500; color:var(--muted-2); margin-top:2px;')}>Pomidor, Olma, Sut · 3 ta</div></div></div>
      {rows.map((r, i) => (
        <div key={i} style={css('display:flex; align-items:center; justify-content:space-between; padding:13px 0; border-bottom:1px solid var(--fill);')}><span style={css('font-size:13.5px; font-weight:600; color:var(--muted);')}>{r[0]}</span><span style={css('font-size:13.5px; font-weight:700; color:var(--text);')}>{r[1]}</span></div>
      ))}
      <div style={css('display:flex; align-items:center; justify-content:space-between; padding:15px 0;')}><span style={css('font-size:14px; font-weight:700; color:var(--text-2);')}>Jami</span><span style={css('font-size:18px; font-weight:800; color:var(--accentDeep);')}>41 000 so'm</span></div>
    </div>
  );
}

export function BozorActive() {
  const { go } = useApp();
  const done = [['Buyurtma yuborildi', '14:32'], ['Operator tasdiqladi', "14:35 · qo'ng'iroq orqali"], ['Kuryerga topshirildi', '14:48 · Doniyor K. qabul qildi']];
  return (
    <Screen>
      <Header title="Buyurtma #1043" back />
      <div className="scroll">
        <div style={css('margin:16px 18px 0; background:var(--success-soft); border:1px solid var(--success-border); border-radius:18px; padding:16px; display:flex; gap:13px; align-items:flex-start;')}>
          <Icon s="check" fill style={{ width: 46, height: 46, flex: 'none', borderRadius: '50%', background: 'var(--success)', color: 'var(--on-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }} />
          <div style={css('flex:1;')}>
            <div style={css('display:flex; align-items:center; gap:8px; flex-wrap:wrap;')}><span style={css('font-size:16px; font-weight:700; color:var(--text);')}>Buyurtma tasdiqlandi</span><span style={css('height:20px; padding:0 8px; display:flex; align-items:center; border-radius:6px; background:var(--success); font-size:10px; font-weight:700; color:var(--on-accent); letter-spacing:0.3px;')}>FAOL</span></div>
            <div style={css('font-size:12.5px; font-weight:500; color:var(--muted); line-height:1.55; margin-top:5px;')}>Operator buyurtmangizni tasdiqladi. Kuryer mahsulotlarni yetkazib berish uchun yo'lga chiqmoqda.</div>
          </div>
        </div>
        <div style={css('margin:16px 18px 0; background:var(--surface); border:1px solid var(--border); border-radius:18px; padding:16px 16px 2px; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
          {done.map((s, i) => (
            <div key={i} style={css('display:flex; gap:12px;')}>
              <div style={css('display:flex; flex-direction:column; align-items:center; align-self:stretch;')}><Icon s="check_circle" fill style={{ fontSize: 24, color: 'var(--success)' }} /><div style={css(`width:2px; flex:1; min-height:16px; background:${i === 2 ? 'var(--accent)' : 'var(--success)'}; margin:3px 0;`)} /></div>
              <div style={css('padding-bottom:16px;')}><div style={css('font-size:14px; font-weight:700; color:var(--text);')}>{s[0]}</div><div style={css('font-size:12px; font-weight:500; color:var(--muted-2); margin-top:2px;')}>{s[1]}</div></div>
            </div>
          ))}
          <div style={css('display:flex; gap:12px;')}>
            <div style={css('display:flex; flex-direction:column; align-items:center;')}><Icon s="radio_button_checked" fill style={{ fontSize: 24, color: 'var(--accent)' }} /></div>
            <div style={css('padding-bottom:16px;')}><div style={css('font-size:14px; font-weight:700; color:var(--text);')}>Kuryer yo'lda</div><div style={css('font-size:12px; font-weight:600; color:var(--accentDeep); margin-top:2px;')}>~30 daqiqada yetkaziladi</div></div>
          </div>
        </div>
        <OrderRecap rows={[["To'lov", 'Naqd pul']]} />
      </div>
      <div className="footer" style={css('padding:12px 18px 22px;')}>
        <div className="press" onClick={() => go('chat-thread')} style={css('height:52px; border-radius:14px; background:var(--accent); display:flex; align-items:center; justify-content:center; gap:8px; font-size:15px; font-weight:700; color:var(--on-accent); box-shadow:0 6px 16px rgba(249,115,22,0.18);')}><Icon s="chat" style={{ fontSize: 20 }} />Kuryer bilan bog'lanish</div>
      </div>
    </Screen>
  );
}
