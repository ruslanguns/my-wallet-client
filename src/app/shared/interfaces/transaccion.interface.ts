
export enum EnumTransaccion {
  INGRESO = 'ingreso',
  EGRESO = 'egreso'
}

export interface ITransaccion {
  id?: string | number;
  descripcion: string;
  tipo: EnumTransaccion;
  cantidad: number;
  propietario?: string;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
}
