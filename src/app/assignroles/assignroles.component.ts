import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-assignroles',
  templateUrl: './assignroles.component.html',
  styleUrls: ['./assignroles.component.css']
})
export class AssignRolesComponent implements OnInit {
  form: any;
  isLoadingResults = true;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string [] = ['id', 'name', 'empty', 'select'];
  id: number;
  userId: any;
  objectArray: object[];
  roles: any = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private snackBar: MatSnackBar, private dialogref: MatDialogRef<AssignRolesComponent>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/roles/', this.httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.isLoadingResults = false;
      },
      err => {
        this.isLoadingResults = false;
      }),
      this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params.id;
      });
  }

  updateSelected(value: string) {
    if (this.roles.includes(value)) {
      this.roles.splice(this.roles.indexOf(value));
    } else {
      this.roles.push(value);
    }
  }

  assignRoles() {
    this.http.put<any>('https://backend.carfleetmanagementsystem.pl:443/roles', {
        userId: this.userId,
        roles: this.roles
    }, this.httpOptions)
      .subscribe(
        (response: any) => {
        },
        err => {
        });
    this.dialogref.close();
  }

}

