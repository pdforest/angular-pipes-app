import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:    string = 'nombre y apellido';
  nombreUpper:    string = 'NOMBRE Y APELLIDO'
  nombreCompleto: string = 'nOmBRe y apElLiDo'

  fecha: Date = new Date();

  constructor() { }

}
