import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public autenticado = false;

  constructor(private router: Router) { }


  estaAutenticado() {
    this.autenticado = Boolean(localStorage.getItem('autenticado'));
    return this.autenticado;
  }

  login(): void {
    this.router.navigate(['/transacciones'])
    this.autenticado = true;
    localStorage.setItem('autenticado', this.autenticado.toString());
  }

  logout(): void {
    this.router.navigate(['/'])
    this.autenticado = false;
    localStorage.removeItem('autenticado')
  }

}
