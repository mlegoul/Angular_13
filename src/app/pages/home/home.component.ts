import {Component, OnInit} from '@angular/core';
import {RssService} from '../../services/rss.service';
import {map, reduce, take, tap} from 'rxjs/operators';
import {RssModel} from '../../interfaces/rss-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rssFeed: RssModel[];

  constructor(
    private rssService: RssService,
  ) {
  }

  ngOnInit(): void {
    this.getJsonFromService();
  }

  getJsonFromService() {
    return this.rssService.getJsonFromDatabase$()
      .pipe(
        take(1),
        map(value => Object.values(value)
          .reduce((acc, value) => {
            return [...Object.values(value)];
          }, [])
        ),
        tap(rss => this.rssFeed = rss),
      )
      .subscribe();
  }
}
