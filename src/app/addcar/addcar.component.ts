import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddCarComponent implements OnInit {
  form: any = { blocked: false};
  model: any;
  blocked: boolean;
  plateNumber: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,  public dialogref: MatDialogRef<AddCarComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.http.post<any>('https://backend.carfleetmanagementsystem.pl:443/listofcars', {
        model: this.form.model,
        blocked: this.form.blocked,
        plateNumber: this.form.plateNumber
    }, this.httpOptions)
      .subscribe(
        (response: any) => {
        },
        err => {
        });
    this.dialogref.close();
  }

}
