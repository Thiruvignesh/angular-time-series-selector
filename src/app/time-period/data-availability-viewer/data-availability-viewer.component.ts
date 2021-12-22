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
    [
      "2021 Week 1",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 2",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 3",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 4",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 5",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 6",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 7",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 8",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 9",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 10",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 11",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 12",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 13",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 14",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 15",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 16",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 17",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 18",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 19",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    [
      "2021 Week 20",
      "TRUE",
      "FALSE",
      "TRUE"
    ],
    [
      "2021 Week 21",
      "TRUE",
      "FALSE",
      "TRUE"
    ],
    [
      "2021 Week 22",
      "TRUE",
      "FALSE",
      "FALSE"
    ],
    [
      "2021 Week 23",
      "TRUE",
      "FALSE",
      "FALSE"
    ],
    [
      "2021 Week 24",
      "FALSE",
      "FALSE",
      "FALSE"
    ]
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
