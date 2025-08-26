import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.html',
  styleUrl: './ejemplo-pipes.css'
})
export class EjemploPipes {
  empleados = [
    {nombre: 'Ricardo Suarez', sueldo: 12000, fechaNacimiento: new Date('2000-08-01')},
    {nombre: 'Laura Mejia', sueldo: 15000, fechaNacimiento: new Date('1990-03-05')},
    {nombre: 'Antonio Perez', sueldo: 9000, fechaNacimiento: new Date('1995-07-12')},
  ]

}
