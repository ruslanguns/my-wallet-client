import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogAgregarTransaccionComponent } from '../../shared/components/dialog-agregar-transaccion/dialog-agregar-transaccion.component';
import { ITransaccion, EnumTransaccion } from '../../shared/interfaces/transaccion.interface';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss']
})
export class TransaccionesComponent implements OnInit {

  @ViewChild('botonesDeAcceso') botonesDeAcceso: MatButtonToggleGroup;
  transacciones: ITransaccion[] = [];
  date = new Date();
  countDownValue = 5;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.transacciones = [
      {
        id: 1,
        descripcion: 'Ingreso nómina',
        tipo: EnumTransaccion.INGRESO,
        cantidad: 1425,
        fechaCreacion: new Date(this.date.setDate(this.date.getDate() - 5)),
        fechaActualizacion: new Date(this.date.setDate(this.date.getDate() - 5)),
      },
      {
        id: 2,
        descripcion: 'Compras mercadona',
        tipo: EnumTransaccion.EGRESO,
        cantidad: 340,
        fechaCreacion: new Date(this.date.setDate(this.date.getDate() - 3)),
        fechaActualizacion: new Date(this.date.setDate(this.date.getDate() - 3)),
      },
      {
        id: 3,
        descripcion: 'Cafe amigos',
        tipo: EnumTransaccion.EGRESO,
        cantidad: 17.50,
        fechaCreacion: new Date(this.date.setDate(this.date.getDate() - 2)),
        fechaActualizacion: new Date(this.date.setDate(this.date.getDate() - 2)),
      },
      {
        id: 4,
        descripcion: 'Bonoloto',
        tipo: EnumTransaccion.EGRESO,
        cantidad: 5,
        fechaCreacion: new Date(this.date.setDate(this.date.getDate() - 1)),
        fechaActualizacion: new Date(this.date.setDate(this.date.getDate() - 1)),
      }
    ];

  }

  ngOnInit(): void {
    const resultado = this.countdown(3, undefined, () => { console.log('Hemos llegado') });
  }

  /**
   * Abrir el SnackBar para eliminar
   * @param value Recibe el mensaje de lo que aparecerá en la alerta
   * @param action El nombre del botón a accionar
   */
  eliminar(id: string | number) {

    const snackBarRef = this.snackBar.open('Eliminando transacción', 'Cancelar', { duration: 3000 });
    const tarea = setTimeout(() => this.eliminarTransaccion(id), 3000);
    snackBarRef.onAction().subscribe(() => clearTimeout(tarea));

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
        res.data.fechaCreacion = new Date();
        res.data.fechaActualizacion = new Date();

        this.agregarTransaccion(res.data);
      })
  }

  obtenerTransaccion(id): ITransaccion {
    return this.transacciones.find(array => array.id === id);
  }

  agregarTransaccion(transaccion: ITransaccion): void {
    this.transacciones.push(transaccion);
  }

  eliminarTransaccion(id) {
    this.transacciones = this.transacciones.filter((item, idx) => idx !== id);
  }

  /**
   * Countdown
   *
   * @private
   * @param {number} x From number
   * @param {() => void} [onStart=() => { }] Emit something on start
   * @param {() => void} [onEachCount=() => { }] Emit something on each step of counting
   * @param {() => void} [onEnd=() => { }] Emit something on ending the counting
   */
  private countdown(
    x: number,
    onStart: () => void = () => { },
    onEachCount: () => void = () => { },
    onEnd: () => void = () => { }
  ): void {
    onStart();
    const _inicio = setInterval(() => {
      x !== 0 ? (this.countDownValue = x--, onEachCount()) : (clearInterval(_inicio), onEnd());
    }, 1000);
  }

}
