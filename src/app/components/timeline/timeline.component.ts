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

  @Output() linkByOutput = new EventEmitter<string>();
  rssFeed: RssModel[] = [];
  isLoading: boolean = true;

  constructor(
    private rssService: RssService,
  ) {
  }


  ngOnInit(): void {
    this.getJsonFromService();
  }


  eventLinkArticle(url: string): void {
    this.linkByOutput.emit(url);
  }


  getJsonFromService(): void {
    this.rssService.getJsonFromDatabase$()
      .pipe(
        take(1),
        map((value: any) => {
          const allItems: RssModel[] = [];
          for (const key in value) {
            if (value.hasOwnProperty(key)) {
              const items = Object.values(value[key]) as RssModel[];
              allItems.push(...items);
            }
          }
          return allItems;
        }),
        tap((rss: RssModel[]) => this.rssFeed = rss),
        tap(() => this.isLoading = false),
      )
      .subscribe();
  }

}
