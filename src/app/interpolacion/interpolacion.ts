import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css'
})
export class Interpolacion {
  titulo = "Universidad Angular";
  usuario = {
    nombre: "Sergio Soria",
    edad: 35
  };

  saludar(){
    return `Hola, ${this.usuario.nombre}`;
  }
}
