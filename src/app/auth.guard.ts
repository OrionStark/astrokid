import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './data-component/users/users.service';
import { Router } from '@angular/router';

/*
        This guard is to protect the loggedin user feature
*/

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private users: UsersService, private router: Router ) {
    if (localStorage.getItem('userdata') != null) {
      this.users.setUserLogedIn();
      this.users.setUserData(JSON.parse(localStorage.getItem('userdata')));
    }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.users.isLoggedin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
