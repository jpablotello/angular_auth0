import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProcesamientoComponent } from './componentes/procesamiento/procesamiento.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { CallbackComponent } from './componentes/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProcesamientoComponent,
    EstadisticasComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
