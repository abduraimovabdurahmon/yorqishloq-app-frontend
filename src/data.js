import { T } from './util.js';

export const DATES = [
  { day: 'Du', num: '23', label: '23-iyun' },
  { day: 'Se', num: '24', label: '24-iyun' },
  { day: 'Cho', num: '25', label: '25-iyun' },
  { day: 'Pa', num: '26', label: '26-iyun' },
  { day: 'Ju', num: '27', label: '27-iyun' },
];

export const TIMES = [
  { t: '09:00' }, { t: '09:30', busy: true }, { t: '10:00' }, { t: '10:30' },
  { t: '11:00', busy: true }, { t: '11:30' }, { t: '14:00' }, { t: '14:30' },
  { t: '15:00' }, { t: '15:30', busy: true }, { t: '16:00' }, { t: '17:00' },
];

export const SERVICES = [
  { name: 'Erkaklar soch olish', dur: '~60 daqiqa', price: '120 000 dan' },
  { name: 'Soch olish + Soqol', dur: '~90 daqiqa', price: '150 000 dan' },
  { name: 'Bolalar soch olish', dur: '11 yoshgacha · ~45 daqiqa', price: '100 000' },
  { name: "To'y soch turmagi", dur: '~250 daqiqa', price: '800 000 dan' },
  { name: 'Soch yotqizish (ukladka)', dur: '~30 daqiqa', price: '70 000' },
  { name: 'Okantovka', dur: 'Chetlarini tekislash · ~30 daqiqa', price: '70 000' },
  { name: 'Nasadka bilan soch olish', dur: '~45 daqiqa', price: '100 000' },
  { name: 'Yuz tozalash', dur: '~30 daqiqa', price: '80 000' },
  { name: 'Soqol korreksiyasi', dur: 'Lezviye bilan · ~30 daqiqa', price: '70 000' },
  { name: 'Issiq vosk (mum)', dur: '~15 daqiqa', price: '60 000' },
  { name: 'Bosh tonirovkasi', dur: 'Rang berish · ~30 daqiqa', price: '60 000' },
  { name: 'Soqol tonirovkasi', dur: 'Rang berish · ~15 daqiqa', price: '50 000' },
  { name: 'Qora niqob (maska)', dur: '~30 daqiqa', price: '60 000' },
];

export const ADS = [
  { img: 'avto rasm', price: '165 000 000', title: 'Chevrolet Cobalt, 2022', loc: 'Yorqishloq', time: '2 soat oldin', top: true, fav: false },
  { img: 'telefon', price: '7 200 000', title: 'iPhone 13, 128GB', loc: 'Jalaquduq', time: '5 soat oldin', top: false, fav: true },
  { img: 'kvartira', price: '480 000 000', title: '3 xonali kvartira, Markaz', loc: 'Markaz', time: 'kecha', top: false, fav: false },
  { img: 'divan', price: '2 500 000', title: 'Burchak divan, yangi', loc: 'Yorqishloq', time: 'kecha', top: false, fav: false },
  { img: 'kurtka', price: '350 000', title: 'Erkaklar teri kurtkasi', loc: 'Jalaquduq', time: 'bugun', top: false, fav: false },
  { img: 'velosiped', price: '1 800 000', title: 'Velosiped Forward 27.5', loc: 'Yorqishloq', time: '2 kun oldin', top: false, fav: false },
];

export const SHOPS = [
  { img: "do'kon", name: 'Okean Market', rating: '4.8', reviews: '320', time: '20–30 daq', min: '30 000', delivery: 'Bepul yetkazish' },
  { img: "do'kon", name: 'Oila Market', rating: '4.6', reviews: '210', time: '25–40 daq', min: '25 000', delivery: 'Yetkazish 8 000' },
  { img: "do'kon", name: 'Oyshabegim', rating: '4.9', reviews: '98', time: '15–25 daq', min: '40 000', delivery: 'Bepul yetkazish' },
  { img: "do'kon", name: 'Uzum Market', rating: '4.7', reviews: '540', time: '30–45 daq', min: '50 000', delivery: 'Yetkazish 10 000' },
];

export const PRODUCTS = [
  { img: 'pomidor', name: 'Pomidor', weight: '1 kg', price: '12 000' },
  { img: 'bodring', name: 'Bodring', weight: '1 kg', price: '9 000' },
  { img: 'olma', name: 'Olma', weight: '1 kg', price: '18 000' },
  { img: 'banan', name: 'Banan', weight: '1 kg', price: '24 000' },
  { img: 'sut', name: 'Sut 2.5%', weight: '1 L', price: '11 000' },
  { img: 'tuxum', name: 'Tuxum', weight: '10 dona', price: '16 000' },
];

export const VEHS = [
  { icon: 'two_wheeler', name: 'Skuter', desc: 'Hujjat, kichik paket · 5 kg gacha', price: '8 000', eta: '10–15 daq' },
  { icon: 'directions_car', name: 'Yengil mashina', desc: "O'rta yuk, sumkalar · 50 kg gacha", price: '15 000', eta: '12–18 daq' },
  { icon: 'local_shipping', name: 'Yuk mashina', desc: 'Mebel, katta yuk · 500 kg gacha', price: '35 000', eta: '20–30 daq' },
];

export const TAXIS = [
  { icon: 'home', name: 'Yorqishloq ichida', desc: 'Qishloq hududida qisqa masofa', price: '5 000 dan', eta: '5–10 daq' },
  { icon: 'location_city', name: 'Tuman ichida', desc: 'Tuman markazi va qishloqlar', price: '15 000 dan', eta: '15–25 daq' },
  { icon: 'map', name: 'Viloyat ichida', desc: 'Viloyat shaharlari aro', price: '40 000 dan', eta: '40–60 daq' },
  { icon: 'alt_route', name: 'Viloyatlar aro', desc: 'Boshqa viloyatlarga safar', price: '120 000 dan', eta: '3–6 soat' },
  { icon: 'directions_bus', name: 'Toshxovuz taksi', desc: "Belgilangan yo'nalish · jamoaviy", price: '25 000', eta: 'Jadval bo‘yicha' },
];

export const NEWS = [
  { img: 'yangilik', tag: "E'lon", tagBg: T.accent, title: 'Yorqishloqda yangi suv quvuri ishga tushdi', excerpt: "Markaziy ko'chalarga toza ichimlik suvi uzluksiz yetkazib berila boshlandi.", src: 'Tuman hokimligi', time: '2 soat oldin', views: '1 240' },
  { img: 'yangilik', tag: 'Voqea', tagBg: '#2563EB', title: 'Bozor maydonida payshanba yarmarkasi', excerpt: 'Har payshanba kuni mahalliy fermerlar arzon narxda mahsulot sotadi.', src: 'Yorqishloq City', time: '5 soat oldin', views: '860' },
  { img: 'yangilik', tag: 'Sport', tagBg: '#16A34A', title: "Yoshlar futbol turniri g'oliblari aniqlandi", excerpt: 'Finalda “Yorqishloq” jamoasi qo\'shni qishloq terma jamoasini yengdi.', src: 'Sport bo‘limi', time: 'kecha', views: '2 110' },
  { img: 'yangilik', tag: 'Ogohlantirish', tagBg: '#DC2626', title: "Ertaga elektr ta'minoti vaqtincha cheklanadi", excerpt: "Profilaktika ishlari tufayli 09:00–13:00 oralig'ida tok o'chiriladi.", src: 'Elektr tarmoqlari', time: 'kecha', views: '3 540' },
  { img: 'yangilik', tag: "E'lon", tagBg: T.accent, title: "Maktablarda yangi o'quv yiliga tayyorgarlik", excerpt: "Ta'mirlash ishlari yakunlanmoqda, sinflar jihozlanmoqda.", src: 'Xalq ta‘limi', time: '2 kun oldin', views: '720' },
];

export const CHATS = [
  { name: 'Doniyor (Kuryer)', icon: 'delivery_dining', last: "Yo'ldaman, 10 daqiqada yetib boraman", time: '14:48', unread: 1, online: true },
  { name: 'Okean Market', icon: 'storefront', last: 'Buyurtmangiz tayyorlanmoqda ✅', time: '14:33', unread: 0, online: true },
  { name: 'Jasurbek (Cobalt)', icon: 'directions_car', last: 'Narxi kelishilgan, ertaga ko‘rishamiz', time: '12:10', unread: 2, online: false },
  { name: 'Aziza opa', icon: 'person', last: 'Velosiped hali sotuvdami?', time: '11:20', unread: 1, online: true },
  { name: 'Sardor (qo‘shni)', icon: 'person', last: 'Rahmat, yetib oldim 🙂', time: '09:05', unread: 0, online: false },
  { name: 'Salohiddin Barber', icon: 'content_cut', last: 'Soat 10:30 ga band qildim', time: 'kecha', unread: 0, online: false },
  { name: 'Yordam markazi', icon: 'support_agent', last: 'Murojaatingiz qabul qilindi', time: 'kecha', unread: 0, online: true },
];

export const ACTIVE_ORDERS = [
  { icon: 'storefront', title: 'Okean Market', sub: 'Pomidor, Olma, Sut · 3 ta', date: 'Bugun, 14:32', price: '41 000', status: "Kuryer yo'lda", kind: 'progress', action: 'Kuzatish', actionIcon: 'location_on' },
  { icon: 'content_cut', title: 'Salohiddin Barber', sub: 'Erkaklar soch olish', date: '24-iyun, 10:30', price: '120 000', status: 'Tasdiqlandi', kind: 'confirmed' },
  { icon: 'directions_car', title: 'Kuryer xizmati', sub: 'Skuter · kichik paket', date: 'Bugun, 12:05', price: '8 000', status: 'Tasdiqlanmoqda', kind: 'progress' },
];

export const DONE_ORDERS = [
  { icon: 'storefront', title: 'Oila Market', sub: '7 mahsulot', date: '20-iyun', price: '78 000', status: 'Yetkazildi', kind: 'done', rating: 5 },
  { icon: 'content_cut', title: 'Bekzod Pro', sub: 'Soch olish + Soqol', date: '15-iyun', price: '45 000', status: 'Yakunlandi', kind: 'done', action: 'Baholash', actionIcon: 'star' },
  { icon: 'local_taxi', title: 'Taksi', sub: 'Bekat → Markaz', date: '12-iyun', price: '18 000', status: 'Yakunlandi', kind: 'done', rating: 4 },
  { icon: 'directions_car', title: 'Kuryer xizmati', sub: 'Yengil mashina · Markazga', date: '17-iyun', price: '15 000', status: 'Yetkazildi', kind: 'done', rating: 5 },
  { icon: 'storefront', title: 'Uzum Market', sub: '2 mahsulot', date: '10-iyun', price: '52 000', status: 'Bekor qilindi', kind: 'cancel' },
];
