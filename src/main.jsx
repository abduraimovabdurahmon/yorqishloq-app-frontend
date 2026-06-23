import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Telegram WebApp bootstrap
const TG = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
if (TG) {
  try {
    TG.ready();
    TG.expand();
    TG.setHeaderColor && TG.setHeaderColor('#FFFFFF');
    TG.setBackgroundColor && TG.setBackgroundColor('#FAFAF9');
  } catch (e) {}
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
