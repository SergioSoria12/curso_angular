import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpolacion } from "./interpolacion/interpolacion";

@Component({
  selector: 'app-root',
  imports: [Interpolacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Bienvenidos";
}
