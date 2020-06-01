import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    RouterModule,
  ]
})
export class HeaderModule {
}
