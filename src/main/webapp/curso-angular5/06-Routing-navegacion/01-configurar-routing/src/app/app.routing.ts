import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos componentes
import {EmpleadoComponent} from './Componentes/empleadoCmp/empleado.component';
import {FrutaComponent} from './Componentes/frutaCmp/fruta.component';

 const appRoutes: Routes = [
     {path: '', component: EmpleadoComponent},
     {path: 'empleado', component:EmpleadoComponent},
     {path: 'fruta', component: FrutaComponent},
     {path: '**', component: EmpleadoComponent}
 ];

 export const appRoutingProviders: any[] = [];

 export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);