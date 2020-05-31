import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(
    private http: HttpClient,
  ) { }


  getJsonFromDatabase$(): Observable<Object> {
    return this.http.get('http://localhost:3000/');
  }
}
