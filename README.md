# Yorqishloq App — Frontend (ReactJS)

`Yorqishloq City.dc.html` dizayni asosidagi Telegram Mini App'ning **ReactJS (Vite)** versiyasi.
Bu papka ildizdagi vanilla-JS ilovaning aynan o'zini React komponentlari ko'rinishida qayta yozadi.

## Ishga tushirish

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

Productionga yig'ish:

```bash
npm run build      # natija: dist/
npm run preview    # yig'ilgan versiyani ko'rish
```

Telegram'da: `dist/` ni HTTPS hostga joylab, BotFather'da Web App URL sifatida ko'rsating.

## Tuzilishi

```
src/
  main.jsx          — kirish nuqtasi, Telegram SDK init
  App.jsx           — router (stack), Telegram BackButton, ekran montaji
  state.jsx         — AppProvider context: navigatsiya stack, tanlov holati, toast
  components.jsx    — umumiy UI: Icon, Screen, Header, Tabbar, Cta, Toast, Ph
  data.js           — barcha statik ma'lumotlar
  util.js           — css() (string→style obyekt), asset(), mapOrder(), tokenlar
  styles.css        — dizayn tokenlari + layout
  screens/
    index.js        — id → komponent registri
    Home, Bozor, Services, Barber, Ads, News, Chat, Orders, Profile
public/assets/      — logotip + sartarosh rasmlari
```

## Navigatsiya

- Stack asosida: `go(id)` (push), `back()` (pop), `tab(id)` (root almashtirish).
- Pastki tab-bar: Bosh sahifa · Chat · Buyurtmalarim · Profil.
- Telegram `BackButton` va haptic feedback ulangan.

## Deep-link

`?s=<ekran>` (masalan `?s=barber-book`) yoki Telegram `startapp` parametri orqali
to'g'ridan-to'g'ri ekranni ochish mumkin.

## Eslatma

Dizaynda joy tutuvchi (placeholder) bo'lib turgan do'kon/mahsulot/e'lon rasmlari shu
holicha chiziqli fon bilan qoldirilgan — real rasmlar tayyor bo'lganda `repeating-linear-gradient`
o'rniga `background-image` qo'yib almashtiriladi.
