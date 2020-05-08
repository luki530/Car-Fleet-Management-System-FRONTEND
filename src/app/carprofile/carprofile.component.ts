import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carprofile',
  templateUrl: './carprofile.component.html',
  styleUrls: ['./carprofile.component.css']
})
export class CarProfileComponent implements OnInit {
  form: any;
  isLoggedIn = false;
  plateNumber: string;
  model: string;
  blocked: boolean;
  serialNumber: string;
  roles = [];
  carId: any;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.carId = params.id;
    });
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofcars?id=' + this.carId, this.httpOptions)
      .subscribe(
        (data: any) => {
          this.model = data.model;
          this.plateNumber = data.plateNumber;
          this.serialNumber = data.serialNumber;
          this.blocked = data.blocked;
          if (!(data.loggerDevice == null)) {
            this.serialNumber = data.loggerDevice.serialNumber;
          }
        },
        err => {
        });
  }
}
