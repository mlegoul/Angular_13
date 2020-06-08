import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected: boolean = false;

  constructor(
    private http: HttpClient,
  ) {
  }


  loginFromService$(login: string, password: string): Observable<Object> {
    return this.http.post('http://localhost:3000/api/auth/login', {login, password})
      .pipe(
        tap(() => {
          this.isConnected = true;
          return this.isLogged();
        }),
      )
  }


  isLogged(): boolean {
    console.log('isConnected =', this.isConnected);
    return this.isConnected;
  }

}
