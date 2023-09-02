import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importacion de rutas
import {HomeComponent} from './componentes/home/home.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BookComponent } from './componentes/book/book.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'equipo',component:EquipoComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'book',component:BookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
