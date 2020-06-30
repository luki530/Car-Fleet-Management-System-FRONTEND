import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DeleteLoggerDeviceComponent } from '../deleteloggerdevice/deleteloggerdevice.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-loggerdevicedetails',
  templateUrl: './loggerdevicedetails.component.html',
  styleUrls: ['./loggerdevicedetails.component.css']
})
export class LoggerDeviceDetailsComponent implements OnInit {
  form: any;
  isLoggedIn = false;
  simCardNumber: string;
  serialNumber: string;
  roles = [];
  loggerDeviceId: any;

  // tslint:disable-next-line: max-line-length
  constructor(private title: Title,private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {
    title.setTitle('Logger Device Details')
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.loggerDeviceId = params.id;
    });
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofloggerdevices/' + this.loggerDeviceId, this.httpOptions)
      .subscribe(
        (data: any) => {
          this.simCardNumber = data.simCardNumber;
          this.serialNumber = data.serialNumber;
          if (!(data.loggerDevice == null)) {
            this.serialNumber = data.loggerDevice.serialNumber;
          }
        },
        err => {
        });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteLoggerDeviceComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }


}
