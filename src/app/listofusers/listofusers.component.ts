import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';



@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})

export class ListOfUsersComponent implements OnInit {
  form: any;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + this.tokenStorage.getToken()
    })
  };

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/listofusers', this.httpOptions).subscribe(
      (data: any) => {
        console.log(data);
      });
  }

  onSubmit() {

  }
}

