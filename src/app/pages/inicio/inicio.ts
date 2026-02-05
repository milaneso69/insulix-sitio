import { Component, AfterViewInit } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  standalone: true
})
export class Inicio implements AfterViewInit {

  ngAfterViewInit(): void {
    if (window?.flyonui) {
      window.flyonui.autoInit();
    }
  }

  // Función genérica para ir a cualquier sección
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}