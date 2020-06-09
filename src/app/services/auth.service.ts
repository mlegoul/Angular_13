import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
          console.log('isLogged ==>', this.isLogged());
        }),
      )
  }

  setSession(authResult): void {
    return localStorage.setItem('token', authResult.token);
  }


  isLogged(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    } else {
      return true;
    }
  }


  logoutUser() {
    localStorage.removeItem('token');
    return this.router.navigate(['/login']);
  }

}
