import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  API_URL: string = 'http://localhost:3000/api/auth';


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
    console.log('Remove Token for logout User');
    localStorage.removeItem('token');
    return this.router.navigate(['/login']);
  }

}
