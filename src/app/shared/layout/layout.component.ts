import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { AuthenticationService } from '../../core/auth/services/authentication.service';

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isSidenavOpen = true;
  currentYear: any;
  userId: any;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  async logout() {
    try {
      await this.authenticationService.logout();
      this.authenticationService.removeUser();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

  switchMenuSize() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

}
