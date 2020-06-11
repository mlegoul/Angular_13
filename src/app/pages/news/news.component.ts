import {Component, OnInit} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  linkFromTimeline: string;
  url: SafeResourceUrl;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  getDataFromTimeline(data: string) {
    this.linkFromTimeline = data;
    return this.url = data;
  }

}
