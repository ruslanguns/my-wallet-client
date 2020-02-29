import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../../shared/components/dialog-login/dialog-login.component';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
  ) {
    this.isLoggedIn$ = authService.isLoggedIn$;
  }

  ngOnInit(): void {
  }

  openLoginDialog(): void {
    this.dialog.open(DialogLoginComponent);
  }

  onLogout(): void {
    this.authService.logout();
  }

}
