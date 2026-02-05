import { Component, AfterViewInit } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  standalone: true
})
export class Inicio {

  ngAfterViewInit(): void {
    // Re-inicializa FlyonUI cuando Angular termina de renderizar
    if (window?.flyonui) {
      window.flyonui.autoInit();
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}