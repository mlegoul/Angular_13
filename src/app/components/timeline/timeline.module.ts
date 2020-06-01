import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './timeline.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [TimelineComponent],
  exports: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class TimelineModule {
}
