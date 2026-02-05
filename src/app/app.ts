import { Component, signal } from '@angular/core';
import { Inicio } from "./pages/inicio/inicio";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Inicio, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('insulix-sitio');
}
