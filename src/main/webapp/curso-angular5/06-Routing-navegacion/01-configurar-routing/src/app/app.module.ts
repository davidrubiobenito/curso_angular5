import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// importamos configuracion rutas
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from "./Componentes/empleadoCmp/empleado.component";
import { FrutaComponent } from "./Componentes/frutaCmp/fruta.component";

@NgModule({
  declarations: [
    AppComponent, EmpleadoComponent, FrutaComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
