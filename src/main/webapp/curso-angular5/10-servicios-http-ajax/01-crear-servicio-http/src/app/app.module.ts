import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// importamos configuracion rutas
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from "./Componentes/empleadoCmp/empleado.component";
import { FrutaComponent } from "./Componentes/frutaCmp/fruta.component";
import { HomeComponent } from "./Componentes/homeCmp/home.component";
import { ContactoComponent } from "./Componentes/contactoCmp/contacto.component";
import { CochesComponent } from "./Componentes/cochesCmp/coches.component";

import { ConversorPipe } from "./pipes/conversor.pipe";

@NgModule({
  declarations: [
    AppComponent, EmpleadoComponent, FrutaComponent, HomeComponent, ContactoComponent, ConversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
