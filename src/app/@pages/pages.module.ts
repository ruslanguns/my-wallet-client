import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../@core/core.module';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DialogTestComponent } from '../shared/components/dialog-test/dialog-test.component';


@NgModule({
  declarations: [InicioComponent, TransaccionesComponent, PerfilComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SharedModule.forRoot()
  ],
  entryComponents: [DialogTestComponent]
})
export class PagesModule { }
