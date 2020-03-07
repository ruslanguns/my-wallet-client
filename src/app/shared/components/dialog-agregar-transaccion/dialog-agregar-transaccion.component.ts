import { Component, OnInit, Inject, EventEmitter } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITransaccion, EnumTransaccion } from '../../interfaces/transaccion.interface';
import { CANTIDAD_REGEX_PATTERN } from '../../../config/constants';


@Component({
  selector: 'app-dialog-agregar-transaccion',
  templateUrl: './dialog-agregar-transaccion.component.html',
  styles: [`
    mat-form-field {
      width: 100%;
      margin-bottom: 1rem;
    }
  `]
})
export class DialogAgregarTransaccionComponent implements OnInit {

  CantidadRegex = CANTIDAD_REGEX_PATTERN;

  transaccion: ITransaccion = {
    id: 0,
    descripcion: null,
    tipo: null,
    cantidad: null,
  }
  public event: EventEmitter<{ data: ITransaccion }> = new EventEmitter();
  isEdit = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAgregarTransaccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, item?: ITransaccion }
  ) {

    this.transaccion.tipo = data.tipo as EnumTransaccion;

    switch (data.tipo) {
      case ('editar'):
        this.isEdit = true;
        this.transaccion = data.item
        break;
      default:
        this.isEdit = false;
    }

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.event.emit({ data: this.transaccion });
    console.log(this.transaccion);
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
