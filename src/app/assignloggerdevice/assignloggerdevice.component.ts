import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-assignloggerdevice',
  templateUrl: './assignloggerdevice.component.html',
  styleUrls: ['./assignloggerdevice.component.css']
})
export class AssignLoggerDeviceComponent implements OnInit {
  form: any = {};
  loggerDevices: any = [];
  carId: any;
  serialNumbers: any = [];
  checkLoggerDevice: any = [];

  filteredList: any = [];

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
    this.http.get<any>(GlobalConstants.URL+'listofloggerdevices', this.httpOptions)
      .subscribe(
        (response: any) => {
          this.loggerDevices = response;

          this.checkLoggerDevice = this.data.cars;
          this.checkLoggerDevice.forEach(element => {
            if (element.loggerDevice != null ) {
              this.loggerDevices.splice(element.loggerDevice,1)
            }
          });
          this.loggerDevices.forEach(param => {
            this.serialNumbers.push(param.serialNumber)
          });
          this.filteredList = this.serialNumbers.slice();
        },
        err => {
        });
  }

  save() {
    this.http.put<any>(GlobalConstants.URL+'assignloggerdevice', {
      serialNumber: this.form.serialNumber,
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
