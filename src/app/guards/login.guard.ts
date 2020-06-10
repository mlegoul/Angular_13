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
      console.log('FALSE');
      this.router.navigate(['/auth/login']).then()
      return false;
    } else {
      console.log('TRUE');
      return true;
    }
  }
}
