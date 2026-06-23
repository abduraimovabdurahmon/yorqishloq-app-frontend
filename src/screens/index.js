import Home from './Home.jsx';
import { BozorShops, BozorProducts, BozorCart, BozorCheckout, BozorSent, BozorActive } from './Bozor.jsx';
import { Kuryer, Taksi } from './Services.jsx';
import { BarberList, BarberPage, BarberBook, BarberConfirm } from './Barber.jsx';
import { AdsList, AdDetail } from './Ads.jsx';
import { NewsList, NewsArticle } from './News.jsx';
import { ChatList, ChatThread } from './Chat.jsx';
import Orders from './Orders.jsx';
import Profile from './Profile.jsx';
import Settings from './Settings.jsx';

// Screen registry — maps route id -> component (ids match the original vanilla app).
export const SCREENS = {
  'home': Home,
  'bozor-shops': BozorShops,
  'bozor-products': BozorProducts,
  'bozor-cart': BozorCart,
  'bozor-checkout': BozorCheckout,
  'bozor-sent': BozorSent,
  'bozor-active': BozorActive,
  'kuryer': Kuryer,
  'taksi': Taksi,
  'barber-list': BarberList,
  'barber-page': BarberPage,
  'barber-book': BarberBook,
  'barber-confirm': BarberConfirm,
  'ads-list': AdsList,
  'ad-detail': AdDetail,
  'news-list': NewsList,
  'news-article': NewsArticle,
  'chat-list': ChatList,
  'chat-thread': ChatThread,
  'orders': Orders,
  'profile': Profile,
  'settings': Settings,
};
