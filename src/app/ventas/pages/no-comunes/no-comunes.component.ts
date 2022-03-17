import { Component } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect Pipe
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural Pipe
  clientes: string[] = ['Maria','Pedro','Marcos','Hugo','Rosa'];

  clientesMapa = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  
  cambiarCliente(){
    this.nombre = 'Pedro';
    this.genero = 'masculino';
  }
  
  borrarCliente(){
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'El Macho',
    edad: 15,
    direccion: 'De las tarlipes 24'
  }

  // Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Ironman',
      vuela: true
    }

  ]

  // Async Pipe

  miObservable = interval(5000); //0 1 2 3 4 .... 

//  constructor(){
//    this.miObservable.subscribe( console.log);
//  }

  valorPromesa = new Promise( (resolve,reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);




  });

}
