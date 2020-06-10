import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  API_URL: string = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  loginFromService$(login: string, password: string): Observable<Object> {
    return this.http.post(this.API_URL + '/login', {login, password})
      .pipe(
        tap((token) => {
          this.setSession(token);
          return this.router.navigate(['/']);
        }),
      )
  }

  setSession(authResult): void {
    return localStorage.setItem('token', authResult.token);
  }

  logoutUser() {
    localStorage.removeItem('token');
    return this.router.navigate(['/auth/login']);
  }
}
