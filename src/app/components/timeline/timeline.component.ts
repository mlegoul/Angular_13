import {Component, OnInit} from '@angular/core';
import {catchError, map, take, tap} from 'rxjs/operators';
import {RssService} from '../../services/rss.service';
import {RssModel} from '../../interfaces/rss-model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  rssFeed: RssModel[];
  isLoading: boolean = true;

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
        tap(() => this.isLoading = false),
      )
      .subscribe();
  }

}
