import {Component, OnInit} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  linkFromTimeline: string = '';
  url: SafeResourceUrl | null = null;

  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
  }

  getDataFromTimeline(data: string): void {
    this.linkFromTimeline = data;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

}
