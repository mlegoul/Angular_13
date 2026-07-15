import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RssModel} from '../interfaces/rss-model';


@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getJsonFromDatabase$(): Observable<RssModel[]> {
    return this.http.get<RssModel[]>('http://localhost:3000/api/rss');
  }

}
