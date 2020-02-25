import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: InicioComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'transacciones', component: TransaccionesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
