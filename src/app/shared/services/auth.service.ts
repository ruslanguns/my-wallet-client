import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { API_SERVER } from 'src/app/config/constants';
import { IUser, ILoginUser } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn$: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) { }

  register(user: IUser): Observable<void> {
    const SERVER = `${API_SERVER}/user/registro`;
    const http$ = this.http.post<IUser>(SERVER, user);

    return http$.pipe(
      map(data => {
        this.isLoginSubject.next(true);
        localStorage.setItem('token', data.accessToken);
        this.router.navigate(['/transacciones']);
      }),
      catchError(err => throwError(err))
    )
  }

  login(user: ILoginUser) {
    const SERVER = `${API_SERVER}/user/login`;
    const http$ = this.http.post<IUser>(SERVER, user);

    return http$.pipe(
      map(data => {
        this.isLoginSubject.next(true);
        localStorage.setItem('token', data.accessToken);
        this.router.navigate(['/transacciones']);
      }),
      catchError(err => throwError(err))
    )

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
