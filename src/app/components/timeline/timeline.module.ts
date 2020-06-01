import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './timeline.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [TimelineComponent],
  exports: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class TimelineModule {
}
