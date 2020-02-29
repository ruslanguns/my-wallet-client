import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { EMAIL_REGEX_PATTERN } from '../../../config/constants';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styles: []
})
export class DialogLoginComponent implements OnInit {

  EmailRegex = EMAIL_REGEX_PATTERN;
  hide = true;

  registerForm = true;
  usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    password: null
  }

  constructor(
    public dialogRef: MatDialogRef<DialogLoginComponent>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    this.authService.login();

    f.resetForm();
    this.dialogRef.close();
  }

}
