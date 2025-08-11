import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
  <h1>{{tituloComponenteInline}}</h1>
    <p>
      componente-en-linea works!
    </p>
  `,
  styles: `
    h1{
      color: blue;
    }
    p{
      font-size: 20px;
    }
  `
})
export class ComponenteEnLinea {
  tituloComponenteInline = "Componente Inline";
}
