import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initTelegram } from './tg.js';
import { initTheme } from './theme.js';
import './styles.css';

// Telegram WebApp bootstrap — ready + request fullscreen + safe-area insets.
initTelegram();
// Theme bootstrap — applies stored / system theme and starts tracking changes.
initTheme();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
