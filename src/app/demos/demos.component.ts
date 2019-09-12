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
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'barcelona' },
    { id: 3, nombre: 'A coruña' },
    { id: 4, nombre: 'SEVILLA' },
  ];
  idProvincia = 2;
  fontSize = 16;

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

  calcula(a: number, b: number): number {
    return a + b;
  }

  cambia() {
    this.visible = !this.visible;
    this.estilo.importante = !this.estilo.importante;
    this.estilo.error = !this.estilo.error;
  }

  public add(msg: string) {
    if (!msg || msg === '') {
      this.log.error('Falta provincia.');
      return;
    }
    const id = this.listado.length === 0 ? 1 :
      (this.listado[this.listado.length - 1].id + 1);
    this.listado.push({ id, nombre: msg });
    this.idProvincia = id;
  }

  ngOnInit() {
  }

  // tslint:disable:member-ordering
  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portuges' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  resultados: any[] = [];
  valCalculadora = 666;
  // tslint:enable:member-ordering

  ponResultado(origen: string, valor: any) {
    this.resultados.push({
      pos: this.resultados.length + 1,
      origen,
      valor
    });
  }

}
