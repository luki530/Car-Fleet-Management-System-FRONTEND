import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})

@Injectable()
export class ListOfUsersComponent implements OnInit {
  form: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id', 'username', 'email'];

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/listofusers', this.httpOptions)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
  }
}

