import { useApp } from '../state.jsx';
import { Screen, Icon } from '../components.jsx';
import { css } from '../util.js';

export default function Profile() {
  const { toast, go, theme } = useApp();
  const themeLabel = { system: 'Tizim', light: "Yorug'", dark: 'Tungi' }[theme] || 'Tizim';
  const InfoRow = ({ icon, label, val, extra, last }) => (
    <div className="press" onClick={() => toast(label)} style={css(`display:flex; align-items:center; gap:13px; padding:14px 16px; ${last ? '' : 'border-bottom:1px solid var(--fill);'}`)}>
      <Icon s={icon} style={{ width: 38, height: 38, flex: 'none', borderRadius: 11, background: 'var(--accentSoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: 'var(--accent)' }} />
      <div style={css('flex:1;')}><div style={css('font-size:11.5px; font-weight:600; color:var(--muted-2);')}>{label}</div><div style={css('font-size:14.5px; font-weight:700; color:var(--text); margin-top:1px;')}>{val}</div></div>
      {extra}
    </div>
  );
  const MenuRow = ({ icon, label, danger, right, last, onClick }) => (
    <div className="press" onClick={onClick || (() => toast(label))} style={css(`display:flex; align-items:center; gap:13px; padding:14px 16px; ${last ? '' : 'border-bottom:1px solid var(--fill);'}`)}>
      <Icon s={icon} style={{ fontSize: 22, color: danger ? 'var(--danger)' : 'var(--muted)' }} />
      <span style={css(`flex:1; font-size:14.5px; font-weight:700; color:${danger ? 'var(--danger)' : 'var(--text)'};`)}>{label}</span>
      {right !== undefined ? right : <Icon s="chevron_right" style={{ fontSize: 20, color: 'var(--faint)' }} />}
    </div>
  );
  return (
    <Screen>
      <div className="hdr"><span className="title">Profil</span><span className="act-r" onClick={() => go('settings')}><Icon s="settings" style={{ fontSize: 23, color: 'var(--muted)' }} /></span></div>
      <div className="scroll">
        <div style={css('padding:24px 18px 22px; background:var(--surface); display:flex; flex-direction:column; align-items:center;')}>
          <div style={css('position:relative;')}>
            <div style={css('width:96px; height:96px; border-radius:50%; background:var(--accent); display:flex; align-items:center; justify-content:center; font-size:34px; font-weight:700; color:var(--on-accent); box-shadow:0 6px 16px rgba(249,115,22,0.16);')}>AA</div>
            <span className="press" onClick={() => toast("Rasm o'zgartirish")} style={css('position:absolute; right:-2px; bottom:-2px; width:32px; height:32px; border-radius:50%; background:var(--surface); border:2px solid var(--bg); display:flex; align-items:center; justify-content:center;')}><Icon s="photo_camera" style={{ fontSize: 17, color: 'var(--accent)' }} /></span>
          </div>
          <div style={css('font-size:21px; font-weight:700; color:var(--text); margin-top:14px; letter-spacing:-0.3px;')}>Abduraimov Abduraxmon</div>
          <div style={css('display:flex; align-items:center; gap:5px; margin-top:5px;')}><Icon s="location_on" style={{ fontSize: 16, color: 'var(--accent)' }} /><span style={css('font-size:13.5px; font-weight:600; color:var(--muted);')}>Yorqishloq, Jalaquduq</span></div>
          <div className="press" onClick={() => toast('Profilni tahrirlash')} style={css('display:flex; align-items:center; gap:6px; height:34px; padding:0 14px; margin-top:14px; border-radius:11px; background:var(--accentSoft); font-size:13px; font-weight:700; color:var(--accentDeep);')}><Icon s="edit" style={{ fontSize: 17 }} />Profilni tahrirlash</div>
        </div>
        <div style={css('padding:18px 18px 4px;')}>
          <div style={css('font-size:12px; font-weight:700; color:var(--muted-2); letter-spacing:0.5px; text-transform:uppercase; margin-bottom:10px; padding-left:4px;')}>Shaxsiy ma'lumotlar</div>
          <div style={css('background:var(--surface); border:1px solid var(--border); border-radius:18px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            <InfoRow icon="call" label="Telefon raqam" val="+998 90 142 73 95" extra={<Icon s="verified" style={{ fontSize: 18, color: 'var(--success)' }} />} />
            <InfoRow icon="alternate_email" label="Telegram" val="@abdurakhmon_john" />
            <InfoRow icon="cake" label="Tug'ilgan sana" val="7-yanvar, 2004" last />
          </div>
        </div>
        <div style={css('padding:16px 18px 18px;')}>
          <div style={css('background:var(--surface); border:1px solid var(--border); border-radius:18px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04);')}>
            <MenuRow icon="favorite" label="Sevimlilar" />
            <MenuRow icon="location_on" label="Manzillarim" />
            <MenuRow icon="notifications" label="Bildirishnomalar" />
            <MenuRow icon="dark_mode" label="Ko'rinish" onClick={() => go('settings')} right={<span style={css('display:flex; align-items:center; gap:4px; font-size:13px; font-weight:600; color:var(--muted-2);')}>{themeLabel}<Icon s="chevron_right" style={{ fontSize: 20, color: 'var(--faint)' }} /></span>} />
            <MenuRow icon="logout" label="Chiqish" danger right={<span />} last />
          </div>
        </div>
      </div>
    </Screen>
  );
}
