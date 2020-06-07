import {Component, OnInit, ViewChild} from '@angular/core';
import {TimelineComponent} from '../../components/timeline/timeline.component';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

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
