import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITransaccion, EnumTransaccion } from '../../interfaces/transaccion.interface';

@Component({
  selector: 'app-dialog-agregar-transaccion',
  templateUrl: './dialog-agregar-transaccion.component.html',
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `]
})
export class DialogAgregarTransaccionComponent implements OnInit {

  transaccion: ITransaccion = {
    descripcion: null,
    tipo: EnumTransaccion.INGRESO,
    cantidad: null,
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string }
  ) { }

  ngOnInit(): void {
  }

}
