import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
