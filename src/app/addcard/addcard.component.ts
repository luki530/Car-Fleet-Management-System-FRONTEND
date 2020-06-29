import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddCardComponent implements OnInit {
  form: any = {};
  cardId: any;
  userId: any;
  errorCardId: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,  public dialogref: MatDialogRef<AddCardComponent>, private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.id;
    });
  }

  save() {
    this.http.post<any>('https://backend.carfleetmanagementsystem.pl:443/addcard', {
        userId: this.userId,
        cardId: this.form.cardId
    }, this.httpOptions)
      .subscribe(
        (response: any) => {
          this.dialogref.close();
        },
        err => {
        });
  }

}
