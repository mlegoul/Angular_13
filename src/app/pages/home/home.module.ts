import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {TimelineModule} from '../../components/timeline/timeline.module';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TimelineModule,
    MatGridListModule,
  ]
})
export class HomeModule {
}
