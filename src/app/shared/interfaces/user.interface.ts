
export interface IUser {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  accessToken?: string;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
}

export interface ILoginUser {
  correo: string;
  password: string;
}
