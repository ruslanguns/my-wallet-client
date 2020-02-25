import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../@core/core.module';

// Mis servicios
import { AuthService } from './services/auth.service';

// Mis components
import { DialogTestComponent } from './components/dialog-test/dialog-test.component';
import { DialogAgregarTransaccionComponent } from './components/dialog-agregar-transaccion/dialog-agregar-transaccion.component';


@NgModule({
  declarations: [DialogTestComponent, DialogAgregarTransaccionComponent],
  imports: [CommonModule, CoreModule],
  exports: [DialogTestComponent, DialogAgregarTransaccionComponent],
  entryComponents: [DialogTestComponent, DialogAgregarTransaccionComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    }
  }
}
