import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth.routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
  ]
})

export class AuthModule {
}
