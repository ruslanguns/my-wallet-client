import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: InicioComponent },
      { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
      { path: 'transacciones', component: TransaccionesComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
