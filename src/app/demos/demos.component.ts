import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../comunes';
import { LoggerService } from 'src/indra-core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  nombre = 'Mundo';
  listado = [
    { id: 1, nombre: 'Madrid'},
    { id: 2, nombre: 'barcelona'},
    { id: 3, nombre: 'A coruña'},
    { id: 4, nombre: 'SEVILLA'},
  ];
  idProvincia = 2;

  resultado: string;
  visible = true;
  estilo = { importante: true, error: false, urgente: true };

  constructor(public notify: NotificationService, private log: LoggerService) { }

  saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  ngOnInit() {
  }

}
