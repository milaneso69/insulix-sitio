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

  private currentSlide = 0;
  private slideCount = 6;
  private itemsPerPage = 1;

  ngAfterViewInit(): void {
    this.initCarousel();
  }

  private initCarousel(): void {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dots = document.querySelectorAll('.carousel-dot');

    // Detect items per page based on screen size
    this.updateItemsPerPage();
    window.addEventListener('resize', () => this.updateItemsPerPage());

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.showPrevSlide(carouselTrack, dots));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.showNextSlide(carouselTrack, dots));
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index, carouselTrack, dots));
    });

    this.updateDots(dots);
  }

  private updateItemsPerPage(): void {
    if (window.innerWidth >= 768) {
      this.itemsPerPage = 3;
    } else {
      this.itemsPerPage = 1;
    }
  }

  private showPrevSlide(carouselTrack: HTMLElement | null, dots: NodeListOf<Element>): void {
    if (!carouselTrack) return;
    this.currentSlide = Math.max(0, this.currentSlide - 1);
    this.updateCarousel(carouselTrack);
    this.updateDots(dots);
  }

  private showNextSlide(carouselTrack: HTMLElement | null, dots: NodeListOf<Element>): void {
    if (!carouselTrack) return;
    const maxSlide = Math.max(0, this.slideCount - this.itemsPerPage);
    this.currentSlide = Math.min(maxSlide, this.currentSlide + 1);
    this.updateCarousel(carouselTrack);
    this.updateDots(dots);
  }

  private goToSlide(index: number, carouselTrack: HTMLElement | null, dots: NodeListOf<Element>): void {
    if (!carouselTrack) return;
    const maxSlide = Math.max(0, this.slideCount - this.itemsPerPage);
    this.currentSlide = Math.min(maxSlide, Math.max(0, index));
    this.updateCarousel(carouselTrack);
    this.updateDots(dots);
  }

  private updateCarousel(carouselTrack: HTMLElement): void {
    const itemWidth = carouselTrack.parentElement?.offsetWidth || 0;
    const offset = -(this.currentSlide * itemWidth) / this.itemsPerPage;
    carouselTrack.style.transform = `translateX(${offset}px)`;
  }

  private updateDots(dots: NodeListOf<Element>): void {
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.remove('bg-gray-300');
        dot.classList.add('bg-sky-600');
      } else {
        dot.classList.remove('bg-sky-600');
        dot.classList.add('bg-gray-300');
      }
    });
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