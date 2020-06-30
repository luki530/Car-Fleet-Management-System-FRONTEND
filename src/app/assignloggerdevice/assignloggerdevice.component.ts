import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-assignloggerdevice',
  templateUrl: './assignloggerdevice.component.html',
  styleUrls: ['./assignloggerdevice.component.css']
})
export class AssignLoggerDeviceComponent implements OnInit {
  form: any = {};
  loggerDevices: any = [];
  carId: any;
  unusedLoggerDevice: any = [];
  checkLoggerDevice: any = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private dialogref: MatDialogRef<AssignLoggerDeviceComponent>, private activatedRoute: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.carId = params.id;
    });
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofloggerdevices', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.loggerDevices = data;
          this.checkLoggerDevice = this.data.cars;
        },
        err => {
        });
  }

  save() {
    this.http.put<any>('https://backend.carfleetmanagementsystem.pl:443/assignloggerdevice', {
      serialNumber: this.form.loggerDevices.serialNumber,
      carId: this.carId,
    }, this.httpOptions)
      .subscribe(
        (response: any) => {
          this.dialogref.close();
        },
        err => {
        });

  }

}
