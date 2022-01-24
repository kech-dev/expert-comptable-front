import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    var res = localStorage.getItem('isLoggedIn');
    var isAuthenticated;
    res === '1' ? (isAuthenticated = true) : (isAuthenticated = false);
    if (!isAuthenticated) {
      this.router.navigate(['/auth']);
    }
    return isAuthenticated;
  }
}
