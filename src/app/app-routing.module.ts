import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {UsuarioComponent} from './pages/usuario/usuario.component'
import {RutasComponent} from './pages/rutas/rutas.component'
import {CrudComponent} from './pages/crud/crud.component'
import {CuentaComponent} from './pages/cuenta/cuenta.component'
import {DesarrolladoresComponent} from './pages/desarrolladores/desarrolladores.component'

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'crud/:id', component: CrudComponent },
  { path: 'rutas/:id', component: RutasComponent },
  { path: 'cuenta/:id', component: CuentaComponent },
  { path: 'desarrolladores/:id', component: DesarrolladoresComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario' }
];
@NgModule({  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
