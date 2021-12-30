import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CrudComponent } from './pages/crud/crud.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { DesarrolladoresComponent } from './pages/desarrolladores/desarrolladores.component';
import { AllendeComponent } from './pages/allende/allende.component';
import { AllendeDestComponent } from './pages/allende-dest/allende-dest.component';
import { LlanitosComponent } from './pages/llanitos/llanitos.component';
import { LlanitosDestComponent } from './pages/llanitos-dest/llanitos-dest.component';
import { Progreso4Component } from './pages/progreso4/progreso4.component';
import { Progreso4DestComponent } from './pages/progreso4-dest/progreso4-dest.component';
import { AddRutaComponent } from './pages/add-ruta/add-ruta.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CrudComponent,
    RutasComponent,
    CuentaComponent,
    DesarrolladoresComponent,
    AllendeComponent,
    AllendeDestComponent,
    LlanitosComponent,
    LlanitosDestComponent,
    Progreso4Component,
    Progreso4DestComponent,
    AddRutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
