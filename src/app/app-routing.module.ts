import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate:[CanactivateGuard]},
  {path: 'formulario', component: FormularioComponent,canActivate:[CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent,canActivate:[CanactivateGuard]},

  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
