import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {


  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  canActivate(): boolean {

    if (this.authService.isLogged()) {
      console.log('TRUE');
      this.router.navigate(['/']);
      return true;
    } else {
      console.log('FALSE');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
