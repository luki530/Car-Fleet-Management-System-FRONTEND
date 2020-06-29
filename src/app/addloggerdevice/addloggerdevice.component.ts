import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addloggerdevice',
  templateUrl: './addloggerdevice.component.html',
  styleUrls: ['./addloggerdevice.component.css']
})
export class AddLoggerDeviceComponent implements OnInit {
  form: any = {};
  simCardNumber: any;
  serialNumber: any;
  errorSimCardNumber: string;
  errorSerialNumber: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,  public dialogref: MatDialogRef<AddLoggerDeviceComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.http.post<any>('https://backend.carfleetmanagementsystem.pl:443/listofloggerdevices', {
        simCardNumber: this.form.simCardNumber,
        serialNumber: this.form.serialNumber
    }, this.httpOptions)
      .subscribe(
        () => {
          this.dialogref.close();
        },
        () => {
        });
  }
}


