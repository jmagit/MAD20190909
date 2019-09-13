import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal';
import { ComunesModule } from './comunes';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from 'src/indra-core';
import { environment } from 'src/environments/environment';
import { DemosComponent } from './demos/demos.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PERSONAS_COMPONENT } from './personas/componente.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    PERSONAS_COMPONENT,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    PrincipalModule, ComunesModule, IndraCoreModule,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
