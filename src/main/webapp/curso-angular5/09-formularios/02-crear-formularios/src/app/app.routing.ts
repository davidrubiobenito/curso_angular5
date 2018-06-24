import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos componentes
import {EmpleadoComponent} from './Componentes/empleadoCmp/empleado.component';
import {FrutaComponent} from './Componentes/frutaCmp/fruta.component';
import { HomeComponent } from "./Componentes/homeCmp/home.component";
import { ContactoComponent } from "./Componentes/contactoCmp/contacto.component";
import { CochesComponent } from "./Componentes/cochesCmp/coches.component";

 const appRoutes: Routes = [
     {path: '', component: HomeComponent},
     {path: 'home', component: HomeComponent},
     {path: 'empleado', component:EmpleadoComponent},
     {path: 'fruta', component: FrutaComponent},    
     {path: 'contacto', component: ContactoComponent},
     {path: 'contacto/:page', component: ContactoComponent},
     {path: 'coches', component: CochesComponent},
     {path: '**', component: HomeComponent} 
 ];

 export const appRoutingProviders: any[] = [];

 export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);