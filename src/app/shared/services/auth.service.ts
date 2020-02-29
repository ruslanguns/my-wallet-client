import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn$: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor(private router: Router) { }

  login(): void {
    localStorage.setItem('token', 'jwt');
    this.isLoginSubject.next(true);
    this.router.navigate(['/transacciones']);
  }

  logout(): void {
    localStorage.removeItem('token')
    this.isLoginSubject.next(false);
    this.router.navigate(['/']);
  }

  /**
   * Se lee el localStorage una única vez al momento de inicializar este servicio
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
