import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAvailabilityViewerComponent } from './data-availability-viewer/data-availability-viewer.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
    declarations: [
        DataAvailabilityViewerComponent
    ],
    exports: [
        DataAvailabilityViewerComponent
    ],
    imports: [
        CommonModule,
      HttpClientModule
    ]
})
export class TimePeriodModule { }
