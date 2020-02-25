import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog'
import { DialogAgregarTransaccionComponent } from '../../shared/components/dialog-agregar-transaccion/dialog-agregar-transaccion.component';

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
   * Añadir EGRESO / INGRESO
   * @param tipo Se especifica el tipo, en este caso solo hay dos: ingreso y egreso
   */
  agregarItem(tipo: string) {

    const dialogRef = this.dialog.open(DialogAgregarTransaccionComponent, { data: { tipo }, width: '900px', })
    dialogRef.afterClosed()
      .subscribe(result => console.log(result))
  }


}
