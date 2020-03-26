import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../@core/core.module';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [InicioComponent, TransaccionesComponent, PerfilComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SharedModule
  ],
})
export class PagesModule { }
