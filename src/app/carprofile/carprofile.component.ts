import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteCarComponent } from '../deletecar/deletecar.component';
import { MatDialog } from '@angular/material/dialog';
import { AssignLoggerDeviceComponent } from '../assignloggerdevice/assignloggerdevice.component';
import { Title } from '@angular/platform-browser';

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
  carId: any;

  // tslint:disable-next-line: max-line-length
  constructor(private title: Title,private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {
    title.setTitle('Car Details')
  }

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
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofcars/' + this.carId, this.httpOptions)
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

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteCarComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  assignLoggerDevice(): void {
    let dialogRef = this.dialog.open(AssignLoggerDeviceComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

}

