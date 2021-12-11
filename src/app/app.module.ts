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


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CrudComponent,
    RutasComponent,
    CuentaComponent,
    DesarrolladoresComponent
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
