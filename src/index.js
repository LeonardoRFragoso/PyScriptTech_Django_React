// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css'; // Atualize o caminho conforme necessário
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
