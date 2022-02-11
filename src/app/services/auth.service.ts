import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiLoginUrl: string = 'http://localhost:3000/api/auth/login';
  apiSignUpUrl: string = 'http://localhost:3000/api/auth/signup';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  loginWithEmailAndPassword$(email: string, password: string): Observable<Object> {
    return this.http.post(this.apiLoginUrl, {email, password})
      .pipe(
        tap((token) => this.setSession(token)),
      );
  }

  createAccount$(email: string, password: string, username: string): Observable<Object> {
    return this.http.post(this.apiSignUpUrl, {email, password, username})
      .pipe(
        tap((token) => this.setSession(token)),
      );
  }

  setSession(authResult): Promise<boolean> {
    localStorage.setItem('token', authResult.token);
    return this.router.navigate(['/']);
  }

  logoutUser() {
    localStorage.removeItem('token');
    return this.router.navigate(['/auth/login']);
  }
}
