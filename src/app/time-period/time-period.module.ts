import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataAvailabilityViewerComponent} from './data-availability-viewer/data-availability-viewer.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    DataAvailabilityViewerComponent
  ],
  exports: [
    DataAvailabilityViewerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class TimePeriodModule { }
