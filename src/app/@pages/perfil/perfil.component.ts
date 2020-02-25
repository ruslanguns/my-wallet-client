import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: IUser = {
    nombre: '',
    apellido: '',
    correo: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
