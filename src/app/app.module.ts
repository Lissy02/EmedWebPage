import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BookComponent } from './componentes/book/book.component';
import { ConferenciasComponent } from './componentes/conferencias/conferencias.component';
import { PropiedadIntelectualComponent } from './componentes/propiedad-intelectual/propiedad-intelectual.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EquipoComponent,
    ProyectosComponent,
    BookComponent,
    ConferenciasComponent,
    PropiedadIntelectualComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
