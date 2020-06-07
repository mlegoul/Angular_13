import {Component, OnInit, ViewChild} from '@angular/core';
import {TimelineComponent} from '../../components/timeline/timeline.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(TimelineComponent) comp: TimelineComponent;
  linkFromTimeline: string;

  constructor() {
  }

  ngOnInit(): void {

  }

  getDataFromTimeline(data: string) {
    this.linkFromTimeline = data;
  }

}
