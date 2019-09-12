import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../principal/home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { PersonaComponent } from '../personas/componente.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [
    HomeComponent, DemosComponent, CalculadoraComponent,
    PersonaComponent,
  ],
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto: 'Personas', componente: PersonaComponent},
    {texto: 'Inicio', componente: HomeComponent },
    {texto: 'Demos', componente: DemosComponent},
    {texto: 'Calculadora', componente: CalculadoraComponent },
  ];

  seleccionado = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number) {
    this.seleccionado = this.menu[indice].componente;
  }

  ngOnInit() {
  }

}
