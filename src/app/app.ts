import { Component } from '@angular/core';
import { Padre } from "./padre/padre";
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";

@Component({
  selector: 'app-root',
  imports: [Saludar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Bienvenidos Curso Angular";
}
