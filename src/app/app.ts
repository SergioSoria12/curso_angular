import { Component, LOCALE_ID } from '@angular/core';
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
import { EjemploPipes } from "./ejemplo-pipes/ejemplo-pipes";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// Registramos los datos de localizacion para español
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-root',
  imports: [Padre, ListadoUsuarios, EjemploPipes],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
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
