import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    var user_session = JSON.parse(localStorage.getItem('user_session'))  ;
    if (this.auth.isLoggedIn() && user_session.access_type == 'admin') {
      return true;
    }
      
      this.router.navigate(['login'])
      return false;
  }

  
}
