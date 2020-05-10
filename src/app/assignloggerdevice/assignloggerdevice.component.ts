import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-assignloggerdevice',
  templateUrl: './assignloggerdevice.component.html',
  styleUrls: ['./assignloggerdevice.component.css']
})
export class AssignLoggerDeviceComponent implements OnInit {
  form: any;
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  displayedColumns: string [] = ['id', 'serialNumber'];
  id: number;
  userid: any

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private snackBar: MatSnackBar, private dialogref: MatDialogRef<AssignLoggerDeviceComponent>) { }

  ngOnInit(): void {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofloggerdevices/', this.httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.isLoadingResults = false;
      },
      err => {
        this.isLoadingResults = false;
      });
  }

  assignLoggerDevice(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
