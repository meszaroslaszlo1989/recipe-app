import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "../auth/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
