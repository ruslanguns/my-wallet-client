import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from './shared/components/dialog-login/dialog-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'my-wallet-client';
  estaAutenticado: boolean;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.estaAutenticado = this.authService.estaAutenticado();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  login(): void {
    this.dialog.open(DialogLoginComponent);
  }

  logout(): void {
    console.log('Se ha cerrado sesión');
    this.authService.logout();
  }



}
