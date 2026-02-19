import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'flyonui/flyonui.js';
// main.ts actualizado
bootstrapApplication(App, appConfig)
  .then(() => {
    // Esperar mínimo 2 segundos para mostrar la animación completa
    return Promise.all([
      new Promise(resolve => setTimeout(resolve, 1000))
    ]);
  })
  .then(() => {
    // Remover el loader con animación mejorada
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 500);
    }
  })
  .catch((err) => console.error(err));