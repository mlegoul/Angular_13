import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {NewsRoutingModule} from './news.routing.module';
import {TimelineModule} from '../../components/timeline/timeline.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {SafePipe} from '../../pipes/safe.pipe';


@NgModule({
  declarations: [NewsComponent, SafePipe],
  imports: [
    CommonModule,
    NewsRoutingModule,
    TimelineModule,
    MatGridListModule,
  ]
})
export class NewsModule {
}
