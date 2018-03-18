import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrutaComponent } from "./Componentes/frutaCmp/fruta.component";

@NgModule({
  declarations: [
    AppComponent, FrutaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
