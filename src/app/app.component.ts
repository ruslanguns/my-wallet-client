import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from './shared/components/dialog-login/dialog-login.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'my-wallet-client';
  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) {
    this.isLoggedIn$ = authService.isLoggedIn$;
  }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  login(): void {
    this.dialog.open(DialogLoginComponent);
  }

  logout(): void {
    this.authService.logout();
  }



}
