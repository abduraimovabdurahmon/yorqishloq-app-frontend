import { createContext, useContext, useState, useRef, useCallback } from 'react';
import { getTheme, setTheme as applyTheme } from './theme.js';

const AppCtx = createContext(null);
export const useApp = () => useContext(AppCtx);

const ROOT_TABS = ['home', 'chat-list', 'orders', 'profile'];

// Telegram haptic helper
const TG = typeof window !== 'undefined' && window.Telegram ? window.Telegram.WebApp : null;
function haptic(kind) {
  if (TG && TG.HapticFeedback) {
    try {
      if (kind === 'select') TG.HapticFeedback.selectionChanged();
      else TG.HapticFeedback.impactOccurred(kind || 'light');
    } catch (e) {}
  }
}

function initialStack() {
  let target = '';
  try {
    const q = new URLSearchParams(location.search);
    target = q.get('s') || '';
    if (!target && TG && TG.initDataUnsafe && TG.initDataUnsafe.start_param) target = TG.initDataUnsafe.start_param;
  } catch (e) {}
  if (!target) return ['home'];
  if (ROOT_TABS.includes(target)) return [target];
  return ['home', target];
}

export function AppProvider({ children }) {
  const [stack, setStack] = useState(initialStack);
  const [anim, setAnim] = useState('anim-tab');
  // selection state for interactive screens
  const [sel, setSel] = useState({ dateIdx: 1, time: '10:30', svcIdx: 0, vehIdx: 0, taxiIdx: 0, ordersTab: 'active' });
  const [toastMsg, setToastMsg] = useState('');
  const [toastOn, setToastOn] = useState(false);
  const [theme, setThemeState] = useState(getTheme);
  const toastTimer = useRef(null);

  // Persist + apply the theme (handled by theme.js), then mirror it into state.
  const setTheme = useCallback((t) => { setThemeState(applyTheme(t)); haptic('select'); }, []);

  const go = useCallback((id) => { setAnim('anim-push'); setStack((s) => [...s, id]); haptic('light'); }, []);
  const back = useCallback(() => { setAnim('anim-tab'); setStack((s) => (s.length > 1 ? s.slice(0, -1) : s)); haptic('light'); }, []);
  const tab = useCallback((id) => { setAnim('anim-tab'); setStack([id]); haptic('light'); }, []);
  const setState = useCallback((patch, isSelect = true) => {
    setSel((s) => ({ ...s, ...patch }));
    haptic(isSelect ? 'select' : 'light');
  }, []);

  const toast = useCallback((msg) => {
    if (!msg) return;
    setToastMsg(msg);
    setToastOn(true);
    haptic('light');
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastOn(false), 1900);
  }, []);

  const value = {
    stack, anim, depth: stack.length, current: stack[stack.length - 1],
    sel, setState, go, back, tab, toast, toastMsg, toastOn,
    theme, setTheme,
  };
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
