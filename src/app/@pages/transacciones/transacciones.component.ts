import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog'
import { DialogAgregarTransaccionComponent } from '../../shared/components/dialog-agregar-transaccion/dialog-agregar-transaccion.component';
import { ITransaccion, EnumTransaccion } from '../../shared/interfaces/transaccion.interface';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss']
})
export class TransaccionesComponent implements OnInit {

  @ViewChild('botonesDeAcceso') botonesDeAcceso: MatButtonToggleGroup;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  /**
   * Abrir el SnackBar
   * @param value Recibe el mensaje de lo que aparecerá en la alerta
   * @param action El nombre del botón a accionar
   * // TODO: Agregar función para deshacer
   */
  openSnackBar(value: string, action: string) {

    const snackBarRef = this.snackBar.open(value, action, { duration: 2000 });
    snackBarRef
      .afterDismissed()
      .subscribe(() => console.log('Acción ejecutada para deshacer la eliminación'));

  }

  /**
   * Añadir o Editar EGRESO / INGRESO
   * @param tipo Se especifica el tipo, en este caso solo hay dos: ingreso y egreso
   */
  gestionarItem(tipo: string, id?: string | number) {

    const item: ITransaccion = {
      id,
      descripcion: 'Compras mercadona',
      cantidad: 425,
      tipo: EnumTransaccion.EGRESO
    }

    const dialogRef = this.dialog.open(DialogAgregarTransaccionComponent, { data: { tipo, item }, width: '900px', })
    dialogRef
      .componentInstance
      .event
      .subscribe((res: { data: ITransaccion }) => {
        console.log(res.data);
      })
  }


}
