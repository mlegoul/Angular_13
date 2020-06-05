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

registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
