import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddCarComponent implements OnInit {
  form: any = { blocked: false };
  model: any;
  blocked: boolean;
  plateNumber: any;
  errorModel: string;
  errorPlatenumber: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, public dialogref: MatDialogRef<AddCarComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.http.post<any>(GlobalConstants.URL + 'listofcars', {
      model: this.form.model,
      blocked: this.form.blocked,
      plateNumber: this.form.plateNumber
    }, this.httpOptions)
      .subscribe(
        (response: any) => {
          this.dialogref.close();
        },
        err => {
        });
  }

}
