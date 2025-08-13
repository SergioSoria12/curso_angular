import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  /* !: operador non-null y dice a visual que va a ser inicializada mas adelante
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje(){
    Emitir el evento con un mensaje (se emite una cadena string)
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }*/

  mensaje: string = 'Mensaje desde el componente Hijo';

  cambiarMensaje(nuevoMensaje: string){
    this.mensaje = nuevoMensaje;
  }
}
