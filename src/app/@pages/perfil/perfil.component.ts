import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/interfaces/user.interface';
import { EMAIL_REGEX_PATTERN } from '../../config/constants';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  EmailRegex = EMAIL_REGEX_PATTERN;
  hide = true;

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
