import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Local infos french date
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './components/header/header.module';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
