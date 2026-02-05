import { Component, signal } from '@angular/core';
import { Inicio } from "./pages/inicio/inicio";

@Component({
  selector: 'app-root',
  imports: [Inicio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('insulix-sitio');
}
