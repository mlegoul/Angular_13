import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectedToBackGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {
  }

  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      return of(false)
        .pipe(
          tap(() => this.router.navigate(['/auth/login'])),
        )
    } else {
      return of(true);
    }
  }
}
