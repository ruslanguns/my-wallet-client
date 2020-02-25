import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styles: [`
    .mat-dialog-container {
      min-width: 100%;
    }
    mat-dialog-content {
      min-width: 1000px;
    }
  `]
})
export class DialogLoginComponent implements OnInit {

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
    if (!f.invalid) {
      console.log(this.usuario);
      this.authService.login();
      f.resetForm();
      this.dialogRef.close();
    }
  }

  resetForm(f: NgForm): void {
    f.resetForm();
  }

}
