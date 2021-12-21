import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TimePeriodModule} from "./time-period/time-period.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        TimePeriodModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
