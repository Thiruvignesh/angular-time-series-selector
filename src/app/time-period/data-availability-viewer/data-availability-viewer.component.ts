import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-data-availability-viewer',
  templateUrl: './data-availability-viewer.component.html',
  styleUrls: ['./data-availability-viewer.component.css']
})
export class DataAvailabilityViewerComponent implements OnInit {

  datasets: string[] = ['IRI', 'POS', 'GRM'];
  datasetAvailability: any[] = [

    ["2018-11 WK 4", "2018-12-01", "TRUE", "TRUE", "TRUE"],

    ["2018-12 WK 1", "2018-12-08", "TRUE", "TRUE", "TRUE"],

    ["2018-12 WK 2", "2018-12-15", "TRUE", "TRUE", "TRUE"],

    ["2018-12 WK 3", "2018-12-22", "TRUE", "TRUE", "TRUE"],

    ["2018-12 WK 4", "2018-12-29", "TRUE", "TRUE", "TRUE"],

    ["2018-12 WK 5", "2019-01-05", "TRUE", "TRUE", "TRUE"],

    ["2019-01 WK 1", "2019-01-12", "TRUE", "TRUE", "TRUE"],

    ["2019-01 WK 2", "2019-01-19", "TRUE", "TRUE", "TRUE"],

    ["2019-01 WK 3", "2019-01-26", "TRUE", "TRUE", "TRUE"],

    ["2019-01 WK 4", "2019-02-02", "TRUE", "TRUE", "TRUE"],

    ["2019-02 WK 1", "2019-02-09", "TRUE", "TRUE", "TRUE"],

    ["2019-02 WK 2", "2019-02-16", "TRUE", "TRUE", "TRUE"],

    ["2019-02 WK 3", "2019-02-23", "TRUE", "TRUE", "TRUE"],

    ["2019-02 WK 4", "2019-03-02", "TRUE", "TRUE", "TRUE"],

    ["2019-03 WK 1", "2019-03-09", "TRUE", "TRUE", "TRUE"],

    ["2019-03 WK 2", "2019-03-16", "TRUE", "TRUE", "TRUE"],

    ["2019-03 WK 3", "2019-03-23", "TRUE", "TRUE", "TRUE"],

    ["2019-03 WK 4", "2019-03-30", "TRUE", "TRUE", "TRUE"],

    ["2019-03 WK 5", "2019-04-06", "TRUE", "TRUE", "TRUE"],

    ["2019-04 WK 1", "2019-04-13", "TRUE", "TRUE", "TRUE"],

    ["2019-04 WK 2", "2019-04-20", "TRUE", "TRUE", "TRUE"],

    ["2019-04 WK 3", "2019-04-27", "TRUE", "TRUE", "TRUE"],

    ["2019-04 WK 4", "2019-05-04", "TRUE", "TRUE", "TRUE"],

    ["2019-05 WK 1", "2019-05-11", "TRUE", "TRUE", "TRUE"],

    ["2019-05 WK 2", "2019-05-18", "TRUE", "TRUE", "TRUE"],

    ["2019-05 WK 3", "2019-05-25", "TRUE", "TRUE", "TRUE"],

    ["2019-05 WK 4", "2019-06-01", "TRUE", "TRUE", "TRUE"],

    ["2019-06 WK 1", "2019-06-08", "TRUE", "TRUE", "TRUE"],

    ["2019-06 WK 2", "2019-06-15", "TRUE", "TRUE", "TRUE"],

    ["2019-06 WK 3", "2019-06-22", "TRUE", "TRUE", "TRUE"],

    ["2019-06 WK 4", "2019-06-29", "TRUE", "TRUE", "TRUE"],

    ["2019-06 WK 5", "2019-07-06", "TRUE", "TRUE", "TRUE"],

    ["2019-07 WK 1", "2019-07-13", "TRUE", "TRUE", "TRUE"],

    ["2019-07 WK 2", "2019-07-20", "TRUE", "TRUE", "TRUE"],

    ["2019-07 WK 3", "2019-07-27", "TRUE", "TRUE", "TRUE"],

    ["2019-07 WK 4", "2019-08-03", "TRUE", "TRUE", "TRUE"],

    ["2019-08 WK 1", "2019-08-10", "TRUE", "TRUE", "TRUE"],

    ["2019-08 WK 2", "2019-08-17", "TRUE", "TRUE", "TRUE"],

    ["2019-08 WK 3", "2019-08-24", "TRUE", "TRUE", "TRUE"],

    ["2019-08 WK 4", "2019-08-31", "TRUE", "TRUE", "TRUE"],

    ["2019-09 WK 1", "2019-09-07", "TRUE", "TRUE", "TRUE"],

    ["2019-09 WK 2", "2019-09-14", "TRUE", "TRUE", "TRUE"],

    ["2019-09 WK 3", "2019-09-21", "TRUE", "TRUE", "TRUE"],

    ["2019-09 WK 4", "2019-09-28", "TRUE", "TRUE", "TRUE"],

    ["2019-09 WK 5", "2019-10-05", "TRUE", "TRUE", "TRUE"],

    ["2019-10 WK 1", "2019-10-12", "TRUE", "TRUE", "TRUE"],

    ["2019-10 WK 2", "2019-10-19", "TRUE", "TRUE", "TRUE"],

    ["2019-10 WK 3", "2019-10-26", "TRUE", "TRUE", "TRUE"],

    ["2019-10 WK 4", "2019-11-02", "TRUE", "TRUE", "TRUE"],

    ["2019-11 WK 1", "2019-11-09", "TRUE", "TRUE", "TRUE"],

    ["2019-11 WK 2", "2019-11-16", "TRUE", "TRUE", "TRUE"],

    ["2019-11 WK 3", "2019-11-23", "TRUE", "TRUE", "TRUE"],

    ["2019-11 WK 4", "2019-11-30", "TRUE", "TRUE", "TRUE"],

    ["2019-12 WK 1", "2019-12-07", "TRUE", "TRUE", "TRUE"],

    ["2019-12 WK 2", "2019-12-14", "TRUE", "TRUE", "TRUE"],

    ["2019-12 WK 3", "2019-12-21", "TRUE", "TRUE", "TRUE"],

    ["2019-12 WK 4", "2019-12-28", "TRUE", "TRUE", "TRUE"],

    ["2019-12 WK 5", "2020-01-04", "TRUE", "TRUE", "TRUE"],

    ["2020-01 WK 1", "2020-01-11", "TRUE", "TRUE", "TRUE"],

    ["2020-01 WK 2", "2020-01-18", "TRUE", "TRUE", "TRUE"],

    ["2020-01 WK 3", "2020-01-25", "TRUE", "TRUE", "TRUE"],

    ["2020-01 WK 4", "2020-02-01", "TRUE", "TRUE", "TRUE"],

    ["2020-02 WK 1", "2020-02-08", "TRUE", "TRUE", "TRUE"],

    ["2020-02 WK 2", "2020-02-15", "TRUE", "TRUE", "TRUE"],

    ["2020-02 WK 3", "2020-02-22", "TRUE", "TRUE", "TRUE"],

    ["2020-02 WK 4", "2020-02-29", "TRUE", "TRUE", "TRUE"],

    ["2020-03 WK 1", "2020-03-07", "TRUE", "TRUE", "TRUE"],

    ["2020-03 WK 2", "2020-03-14", "TRUE", "TRUE", "TRUE"],

    ["2020-03 WK 3", "2020-03-21", "TRUE", "TRUE", "TRUE"],

    ["2020-03 WK 4", "2020-03-28", "TRUE", "TRUE", "TRUE"],

    ["2020-03 WK 5", "2020-04-04", "TRUE", "TRUE", "TRUE"],

    ["2020-04 WK 1", "2020-04-11", "TRUE", "TRUE", "TRUE"],

    ["2020-04 WK 2", "2020-04-18", "TRUE", "TRUE", "TRUE"],

    ["2020-04 WK 3", "2020-04-25", "TRUE", "TRUE", "TRUE"],

    ["2020-04 WK 4", "2020-05-02", "TRUE", "TRUE", "TRUE"],

    ["2020-05 WK 1", "2020-05-09", "TRUE", "TRUE", "TRUE"],

    ["2020-05 WK 2", "2020-05-16", "TRUE", "TRUE", "TRUE"],

    ["2020-05 WK 3", "2020-05-23", "TRUE", "TRUE", "TRUE"],

    ["2020-05 WK 4", "2020-05-30", "TRUE", "TRUE", "TRUE"],

    ["2020-06 WK 1", "2020-06-06", "TRUE", "TRUE", "TRUE"],

    ["2020-06 WK 2", "2020-06-13", "TRUE", "TRUE", "TRUE"],

    ["2020-06 WK 3", "2020-06-20", "TRUE", "TRUE", "TRUE"],

    ["2020-06 WK 4", "2020-06-27", "TRUE", "TRUE", "TRUE"],

    ["2020-06 WK 5", "2020-07-04", "TRUE", "TRUE", "TRUE"],

    ["2020-07 WK 1", "2020-07-11", "TRUE", "TRUE", "TRUE"],

    ["2020-07 WK 2", "2020-07-18", "TRUE", "TRUE", "TRUE"],

    ["2020-07 WK 3", "2020-07-25", "TRUE", "TRUE", "TRUE"],

    ["2020-07 WK 4", "2020-08-01", "TRUE", "TRUE", "TRUE"],

    ["2020-08 WK 1", "2020-08-08", "TRUE", "TRUE", "TRUE"],

    ["2020-08 WK 2", "2020-08-15", "TRUE", "TRUE", "TRUE"],

    ["2020-08 WK 3", "2020-08-22", "TRUE", "TRUE", "TRUE"],

    ["2020-08 WK 4", "2020-08-29", "TRUE", "TRUE", "TRUE"],

    ["2020-09 WK 1", "2020-09-05", "TRUE", "TRUE", "TRUE"],

    ["2020-09 WK 2", "2020-09-12", "TRUE", "TRUE", "TRUE"],

    ["2020-09 WK 3", "2020-09-19", "TRUE", "TRUE", "TRUE"],

    ["2020-09 WK 4", "2020-09-26", "TRUE", "TRUE", "TRUE"],

    ["2020-09 WK 5", "2020-10-03", "TRUE", "TRUE", "TRUE"],

    ["2020-10 WK 1", "2020-10-10", "TRUE", "TRUE", "TRUE"],

    ["2020-10 WK 2", "2020-10-17", "TRUE", "TRUE", "TRUE"],

    ["2020-10 WK 3", "2020-10-24", "TRUE", "TRUE", "TRUE"],

    ["2020-10 WK 4", "2020-10-31", "TRUE", "TRUE", "TRUE"],

    ["2020-11 WK 1", "2020-11-07", "TRUE", "TRUE", "TRUE"],

    ["2020-11 WK 2", "2020-11-14", "TRUE", "TRUE", "TRUE"],

    ["2020-11 WK 3", "2020-11-21", "TRUE", "TRUE", "TRUE"],

    ["2020-11 WK 4", "2020-11-28", "TRUE", "TRUE", "TRUE"],

    ["2020-12 WK 1", "2020-12-05", "TRUE", "TRUE", "TRUE"],

    ["2020-12 WK 2", "2020-12-12", "TRUE", "TRUE", "TRUE"],

    ["2020-12 WK 3", "2020-12-19", "TRUE", "TRUE", "TRUE"],

    ["2020-12 WK 4", "2020-12-26", "TRUE", "TRUE", "TRUE"],

    ["2020-12 WK 5", "2021-01-02", "TRUE", "TRUE", "TRUE"],

    ["2021-01 WK 1", "2021-01-09", "TRUE", "TRUE", "TRUE"],

    ["2021-01 WK 2", "2021-01-16", "TRUE", "TRUE", "TRUE"],

    ["2021-01 WK 3", "2021-01-23", "TRUE", "TRUE", "TRUE"],

    ["2021-01 WK 4", "2021-01-30", "TRUE", "TRUE", "TRUE"],

    ["2021-02 WK 1", "2021-02-06", "TRUE", "TRUE", "TRUE"],

    ["2021-02 WK 2", "2021-02-13", "TRUE", "TRUE", "TRUE"],

    ["2021-02 WK 3", "2021-02-20", "TRUE", "TRUE", "TRUE"],

    ["2021-02 WK 4", "2021-02-27", "TRUE", "TRUE", "TRUE"],

    ["2021-03 WK 1", "2021-03-06", "TRUE", "TRUE", "TRUE"],

    ["2021-03 WK 2", "2021-03-13", "TRUE", "TRUE", "TRUE"],

    ["2021-03 WK 3", "2021-03-20", "TRUE", "TRUE", "TRUE"],

    ["2021-03 WK 4", "2021-03-27", "TRUE", "TRUE", "TRUE"],

    ["2021-03 WK 5", "2021-04-03", "TRUE", "TRUE", "TRUE"],

    ["2021-04 WK 1", "2021-04-10", "TRUE", "TRUE", "TRUE"],

    ["2021-04 WK 2", "2021-04-17", "TRUE", "TRUE", "TRUE"],

    ["2021-04 WK 3", "2021-04-24", "TRUE", "TRUE", "TRUE"],

    ["2021-04 WK 4", "2021-05-01", "TRUE", "TRUE", "TRUE"],

    ["2021-05 WK 1", "2021-05-08", "TRUE", "TRUE", "TRUE"],

    ["2021-05 WK 2", "2021-05-15", "TRUE", "TRUE", "TRUE"],

    ["2021-05 WK 3", "2021-05-22", "TRUE", "TRUE", "TRUE"],

    ["2021-05 WK 4", "2021-05-29", "TRUE", "TRUE", "TRUE"],

    ["2021-06 WK 1", "2021-06-05", "TRUE", "TRUE", "TRUE"],

    ["2021-06 WK 2", "2021-06-12", "TRUE", "TRUE", "TRUE"],

    ["2021-06 WK 3", "2021-06-19", "TRUE", "TRUE", "TRUE"],

    ["2021-06 WK 4", "2021-06-26", "TRUE", "TRUE", "TRUE"],

    ["2021-06 WK 5", "2021-07-03", "TRUE", "TRUE", "TRUE"],

    ["2021-07 WK 1", "2021-07-10", "TRUE", "TRUE", "TRUE"],

    ["2021-07 WK 2", "2021-07-17", "TRUE", "TRUE", "TRUE"],

    ["2021-07 WK 3", "2021-07-24", "TRUE", "TRUE", "TRUE"],

    ["2021-07 WK 4", "2021-07-31", "TRUE", "TRUE", "TRUE"],

    ["2021-08 WK 1", "2021-08-07", "TRUE", "TRUE", "TRUE"],

    ["2021-08 WK 2", "2021-08-14", "TRUE", "TRUE", "TRUE"],

    ["2021-08 WK 3", "2021-08-21", "TRUE", "TRUE", "TRUE"],

    ["2021-08 WK 4", "2021-08-28", "TRUE", "TRUE", "TRUE"],

    ["2021-09 WK 1", "2021-09-04", "TRUE", "TRUE", "TRUE"],

    ["2021-09 WK 2", "2021-09-11", "TRUE", "TRUE", "TRUE"],

    ["2021-09 WK 3", "2021-09-18", "TRUE", "TRUE", "TRUE"],

    ["2021-09 WK 4", "2021-09-25", "TRUE", "TRUE", "TRUE"],

    ["2021-09 WK 5", "2021-10-02", "TRUE", "TRUE", "TRUE"],

    ["2021-10 WK 1", "2021-10-09", "TRUE", "TRUE", "TRUE"],

    ["2021-10 WK 2", "2021-10-16", "TRUE", "TRUE", "TRUE"],

    ["2021-10 WK 3", "2021-10-23", "TRUE", "TRUE", "TRUE"],

    ["2021-10 WK 4", "2021-10-30", "TRUE", "TRUE", "TRUE"],

    ["2021-11 WK 1", "2021-11-06", "TRUE", "TRUE", "TRUE"],

    ["2021-11 WK 2", "2021-11-13", "TRUE", "TRUE", "TRUE"],

    ["2021-11 WK 3", "2021-11-20", "TRUE", "TRUE", "TRUE"],

    ["2021-11 WK 4", "2021-11-27", "TRUE", "TRUE", "TRUE"],

    ["2021-12 WK 1", "2021-12-04", "TRUE", "TRUE", "TRUE"],

    ["2021-12 WK 2", "2021-12-11", "TRUE", "FALSE", "TRUE"],

    ["2021-12 WK 3", "2021-12-18", "TRUE", "FALSE", "TRUE"],

    ["2021-12 WK 4", "2021-12-25", "TRUE", "FALSE", "FALSE"],

    ["2021-12 WK 5", "2022-01-01", "TRUE", "FALSE", "FALSE"],

    ["2022-01 WK 1", "2022-01-08", "FALSE", "FALSE", "FALSE"]
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.http.get('assets/data.csv', {responseType: 'text'})
    //   .subscribe(
    //     data => {
    //       const csvToRowArray = data.split("\r\n");
    //       for (let index = 1; index < csvToRowArray.length; index++) {
    //         let row = csvToRowArray[index].split("\t");
    //         this.datasetAvailability.push(row);
    //       }
    //       console.log(this.datasetAvailability);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
  }

}
