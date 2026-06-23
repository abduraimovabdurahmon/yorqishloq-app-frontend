import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initTelegram } from './tg.js';
import './styles.css';

// Telegram WebApp bootstrap — ready + request fullscreen + safe-area insets.
initTelegram();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
