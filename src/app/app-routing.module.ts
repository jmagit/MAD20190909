import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './principal/home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PageNotFoundComponent } from './principal/page-not-found/page-not-found.component';
import { PersonaListComponent, PersonaViewComponent, PersonaEditComponent, PersonaAddComponent } from './personas/componente.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'demos', component: DemosComponent},
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent},
  { path: 'personas', component: PersonaListComponent},
  { path: 'personas/add', component: PersonaAddComponent},
  { path: 'personas/:id/edit', component: PersonaEditComponent},
  { path: 'personas/:id', component: PersonaViewComponent},
  { path: 'personas/:id/:kk', component: PersonaViewComponent},
  { path: 'empleados', children: [
    { path: '', component: PersonaListComponent},
    { path: 'add', component: PersonaAddComponent},
    { path: ':id/edit', component: PersonaEditComponent},
    { path: ':id', component: PersonaViewComponent},
    { path: ':id/:kk', component: PersonaViewComponent},
    ]},
  { path: 'pepito/grillo', redirectTo: '/personas/2'},
  { path: 'config',
  loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: '404.html', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
