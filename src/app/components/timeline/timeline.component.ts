import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {map, take, tap} from 'rxjs/operators';
import {RssService} from '../../services/rss.service';
import {RssModel} from '../../interfaces/rss-model';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Output() linkByOutput = new EventEmitter();
  rssFeed: RssModel[];
  isLoading: boolean = true;

  constructor(
    private rssService: RssService,
  ) {
  }


  ngOnInit(): void {
    this.getJsonFromService();
  }


  eventLinkArticle(url): void {
    return this.linkByOutput.emit(url);
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
