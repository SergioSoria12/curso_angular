import { Component } from '@angular/core';
import { Padre } from "./padre/padre";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";
import { ComponenteIf } from "./componente-if/componente-if";
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";
import { ViewChildComponent } from "./view-child/view-child";
import { Mensaje } from './mensaje';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";

@Component({
  selector: 'app-root',
  imports: [Padre, ListadoUsuarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Bienvenidos Curso Angular";

  mensaje: string;

  constructor(mensajeService: Mensaje){
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
