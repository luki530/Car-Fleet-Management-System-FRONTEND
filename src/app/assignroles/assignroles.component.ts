import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { ResetPasswordComponent } from '../resetpassword/resetpassword.component';

@Component({
  selector: 'app-assignroles',
  templateUrl: './assignroles.component.html',
  styleUrls: ['./assignroles.component.css']
})
export class AssignRolesComponent implements OnInit {
  form: any;
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  displayedColumns = ['id', 'name', 'assign'];
  id: number;
  name: any;
  userId: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  newOffersForm: FormGroup;
  @ViewChild('formDirective') formDirective: FormGroupDirective;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private snackBar: MatSnackBar, private dialogref: MatDialogRef<AssignRolesComponent>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/roles/', this.httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;
        this.name = response.name;
        this.activatedRoute.queryParams.subscribe(params => {
          this.name = params.name;
        });
      },
      err => {
        this.isLoadingResults = false;
      }),
      this.newOffersForm = new FormGroup({
        isActive: new FormControl(false)
      }),
      this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params.id;
      });
  }

  assignRoles() {
    this.http.put<any>('https://backend.carfleetmanagementsystem.pl:443/roles', {
        userId: this.userId,
        name: this.name
    }, this.httpOptions)
      .subscribe(
        (response: any) => {
        },
        err => {
        });
    this.dialogref.close();
  }

}

