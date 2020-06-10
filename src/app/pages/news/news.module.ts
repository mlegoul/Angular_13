import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {NewsRoutingModule} from './news.routing.module';
import {TimelineModule} from '../../components/timeline/timeline.module';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    TimelineModule,
    MatGridListModule,
  ]
})
export class NewsModule {
}
