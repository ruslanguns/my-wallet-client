import { Component, OnInit, Inject, EventEmitter } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITransaccion, EnumTransaccion } from '../../interfaces/transaccion.interface';


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

  transaccion: ITransaccion = {
    descripcion: null,
    tipo: EnumTransaccion.INGRESO,
    cantidad: null,
  }
  public event: EventEmitter<{ data: ITransaccion }> = new EventEmitter();
  isEdit = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAgregarTransaccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, item?: ITransaccion }
  ) {
    (data.tipo === 'editar')
      ? (this.isEdit = true, this.transaccion = data.item)
      : this.isEdit = false;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.event.emit({ data: this.transaccion });
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
