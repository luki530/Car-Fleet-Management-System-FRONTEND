import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})

export class ListOfUsersComponent implements OnInit {
  form: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    return this.http.get<any>('http://localhost:8080/listofusers', httpOptions).subscribe(
      (data: unknown[]) => {
        console.log(data);
      });
  }
}

