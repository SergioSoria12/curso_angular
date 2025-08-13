import { Component, ViewChild } from '@angular/core';
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  /*mensajePadre: string = "Mensaje desde Componente Padre";

  mensaje: string = '';

  //Se emitio una cadena (string), es lo que vamos a recibir del componente hijo
  recibirNotificacion(mensajeHijo: string){
    this.mensaje = mensajeHijo;
  }*/

  @ViewChild(Hijo) componenteHijo!: Hijo;
  cambiarMensajeHijo() {  
    this.componenteHijo.cambiarMensaje('Mensaje actualizado desde el Componente Padre');
  }
}
