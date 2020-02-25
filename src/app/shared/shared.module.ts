import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../@core/core.module';

// Mis servicios
import { AuthService } from './services/auth.service';

// Mis components
import { DialogTestComponent } from './components/dialog-test/dialog-test.component';
import { DialogAgregarTransaccionComponent } from './components/dialog-agregar-transaccion/dialog-agregar-transaccion.component';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';


@NgModule({
  declarations: [DialogTestComponent, DialogAgregarTransaccionComponent, DialogLoginComponent],
  imports: [CommonModule, CoreModule],
  exports: [DialogTestComponent, DialogAgregarTransaccionComponent, DialogLoginComponent],
  entryComponents: [DialogTestComponent, DialogAgregarTransaccionComponent, DialogLoginComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    }
  }
}
