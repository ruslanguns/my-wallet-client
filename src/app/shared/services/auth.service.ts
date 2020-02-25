import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public autenticado = false;

  constructor(private router: Router) { }

  login(): void {
    this.router.navigate(['/transacciones'])
    this.autenticado = true;
  }

  logout(): void {
    this.router.navigate(['/'])
    this.autenticado = false;
  }

}
