import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importacion de rutas
import {HomeComponent} from './componentes/home/home.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'equipo',component:EquipoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
