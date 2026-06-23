import { useEffect } from 'react';
import { AppProvider, useApp } from './state.jsx';
import { Toast, Tabbar } from './components.jsx';
import { SCREENS } from './screens/index.js';

const TG = typeof window !== 'undefined' && window.Telegram ? window.Telegram.WebApp : null;

// Root tab screens -> which tab is active. The tab bar is rendered once here
// (persistent) so switching tabs never re-animates or "refreshes" the bar itself.
const TAB_OF = { 'home': 'home', 'chat-list': 'chat', 'orders': 'orders', 'profile': 'profile' };

function Router() {
  const { current, depth, back } = useApp();
  const Screen = SCREENS[current] || SCREENS.home;
  const tabKey = TAB_OF[current];

  // Telegram BackButton: show on nested screens, wire it to back().
  useEffect(() => {
    if (!TG || !TG.BackButton) return;
    try {
      if (depth > 1) TG.BackButton.show();
      else TG.BackButton.hide();
    } catch (e) {}
  }, [depth]);

  useEffect(() => {
    if (!TG || !TG.BackButton) return;
    try { TG.BackButton.onClick(back); } catch (e) {}
    return () => { try { TG.BackButton.offClick(back); } catch (e) {} };
  }, [back]);

  // key forces a fresh mount per navigation so the enter animation + scroll reset.
  // The persistent Tabbar lives OUTSIDE the animated/keyed content, so tapping a
  // tab only swaps the content above — the bar stays put (natural, no refresh).
  return (
    <>
      <div className="app">
        <Screen key={`${depth}:${current}`} />
      </div>
      {tabKey && <Tabbar active={tabKey} />}
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <div className="phone">
        <Router />
      </div>
      <Toast />
    </AppProvider>
  );
}
