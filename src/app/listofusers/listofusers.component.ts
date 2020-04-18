import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})

@Injectable()
export class ListOfUsersComponent implements OnInit {
  listOfUsersComponent: any;
  dataSource: MatTableDataSource<unknown>;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private http: HttpClient) {}

  getMessageTableData() {
    return this.http.get('http://localhost:8080/listofusers');
  }

  ngOnInit() {
    this.listOfUsersComponent.getMessageTableData()
      .subscribe((response: unknown[]) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
      });
  }

}

export interface Message {
  Id: string;
  Username: string;
  Email: string;
  Name: string;
  PhoneNumber: string;
}
