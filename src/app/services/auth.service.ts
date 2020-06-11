import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  API_Login_URL: string = 'http://localhost:3000/api/auth/login';
  API_SignUp_URL: string = 'http://localhost:3000/api/auth/signup';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  loginWithEmailAndPassword$(login: string, password: string): Observable<Object> {
    return this.http.post(this.API_Login_URL, {login, password})
      .pipe(
        tap((token) => {
          this.setSession(token);
          return this.router.navigate(['/']);
        }),
        catchError((err => {
          throw err;
        }))
      )
  }

  createAccount$(email: string, password: string): Observable<Object> {
    return this.http.post(this.API_SignUp_URL, {email, password})
      .pipe(
        tap((token) => {
          this.setSession(token);
          return this.router.navigate(['/']);
        }),
        catchError((err => {
          throw err;
        }))
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
