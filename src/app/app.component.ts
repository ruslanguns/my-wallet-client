import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'my-wallet-client';

  constructor(private authService: AuthService) { }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  login(): void {
    console.log('Inicio de sesión');
  }

  logout(): void {
    console.log('Cerrar sesión');
  }



}
