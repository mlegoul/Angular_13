import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './timeline.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {FrenchDatePipe} from '../../pipes/french-date.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [TimelineComponent, FrenchDatePipe],
  exports: [
    TimelineComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatProgressSpinnerModule
    ]
})
export class TimelineModule {
}
