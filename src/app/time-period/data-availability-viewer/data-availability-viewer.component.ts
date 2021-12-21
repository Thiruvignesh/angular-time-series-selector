import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-data-availability-viewer',
  templateUrl: './data-availability-viewer.component.html',
  styleUrls: ['./data-availability-viewer.component.css']
})
export class DataAvailabilityViewerComponent implements OnInit {

  datasets: string[] = ['IRI', 'POS', 'GRM'];
  datasetAvailability: any[]= [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('assets/data.csv', {responseType: 'text'})
      .subscribe(
        data => {
          const csvToRowArray = data.split("\r\n");
          for (let index = 1; index < csvToRowArray.length; index++) {
            let row = csvToRowArray[index].split("\t");
            this.datasetAvailability.push(row);
          }
          console.log(this.datasetAvailability);
        },
        error => {
          console.log(error);
        }
      );
  }

}
