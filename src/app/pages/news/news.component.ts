import {Component, OnInit, ViewChild} from '@angular/core';
import {TimelineComponent} from '../../components/timeline/timeline.component';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @ViewChild(TimelineComponent) component: TimelineComponent;
  linkFromTimeline: string;
  url: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
  }

  getDataFromTimeline(data: string) {
    this.linkFromTimeline = data;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }
}
