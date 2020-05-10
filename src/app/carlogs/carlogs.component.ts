import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'carlogs',
  templateUrl: './carlogs.component.html',
  styleUrls: ['./carlogs.component.css']
})
export class CarLogsComponent implements OnInit {


  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff'
    }
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  cars: any = [];
  isSuccesful = false;
  form: any = {};
  hours: string;
  minutes: string;
  logs: any = [];
  markers: any = [];

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofcars', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.cars = data;
        },
        err => {
        });
    // this.form.startDate = new Date();
  }

  onSubmit() {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/carlog/find/' + this.form.car.id
      + '/' + (this.form.startDate.getTime() / 1000 + (this.stringToInt(this.form.startTime))) + '/'
      + (this.form.endDate.getTime() / 1000 + (this.stringToInt(this.form.endTime))),
      this.httpOptions)
      .subscribe(
        (data: any) => {
          this.logs = data;
          this.addMarker(this.logs[0].gpsLocation.latitude, this.logs[0].gpsLocation.longitude, this.logs[0].gpsLocation.address);
        },
        err => {
        });

  }

  stringToInt(stringNumber: string) {
    this.hours = stringNumber.substring(0, 2);
    this.minutes = stringNumber.substring(3, 5);
    return (Number(this.hours) * 3600 + Number(this.minutes) * 60);
  }

  addMarker(latitude, longitude, title) {
    this.markers.push({
      position: {
        lat: latitude,
        lng: longitude,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + title,
      },
      title: 'Marker title ' + title,
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }
}
