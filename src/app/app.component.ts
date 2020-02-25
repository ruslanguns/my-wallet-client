import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from './shared/components/dialog-login/dialog-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'my-wallet-client';

  constructor(
    public authService: AuthService,
    public dialog: MatDialog
  ) { }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  login(): void {
    this.dialog.open(DialogLoginComponent);
    console.log('Se ha iniciado sesión');
  }

  logout(): void {
    console.log('Se ha cerrado sesión');
    this.authService.logout();
  }



}
