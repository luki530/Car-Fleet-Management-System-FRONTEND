import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addloggerdevice',
  templateUrl: './addloggerdevice.component.html',
  styleUrls: ['./addloggerdevice.component.css']
})
export class AddLoggerDeviceComponent implements OnInit {
  form: any;
  serialNumber: string;
  simCardNumber: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,  public dialogref: MatDialogRef<AddLoggerDeviceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
  }

  save() {
    this.http.post<any>('https://backend.carfleetmanagementsystem.pl:443/listofloggerdevices', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.serialNumber = data.serialNumber;
          this.simCardNumber = data.simCardNumber;
        },
        err => {
        });
    this.dialogref.close(this.data.cardId);
  }

}