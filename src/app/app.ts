import { Component } from '@angular/core';
import { Padre } from "./padre/padre";
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";
import { ComponenteIf } from "./componente-if/componente-if";
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";

@Component({
  selector: 'app-root',
  imports: [AgregarTarea, ComponenteFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Bienvenidos Curso Angular";
}
