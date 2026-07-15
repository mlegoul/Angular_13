import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

interface AuthResponse {
  token: string;
}

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

  loginWithEmailAndPassword$(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.API_Login_URL, {email, password})
      .pipe(
        tap((token: AuthResponse) => this.setSession(token)),
      )
  }

  createAccount$(email: string, password: string, username: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.API_SignUp_URL, {email, password, username})
      .pipe(
        tap((token: AuthResponse) => this.setSession(token)),
      )
  }

  setSession(authResult: AuthResponse): Promise<boolean> {
    localStorage.setItem('token', authResult.token);
    return this.router.navigate(['/']);
  }

  logoutUser(): Promise<boolean> {
    localStorage.removeItem('token');
    return this.router.navigate(['/auth/login']);
  }
}
