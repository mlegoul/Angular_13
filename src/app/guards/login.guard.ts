import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {
  }

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('False, no Token - from Guard');
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      console.log('True, Token - from Guard');
      return true;
    }
  }
}
