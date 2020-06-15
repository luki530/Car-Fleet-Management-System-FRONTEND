import { Component, OnInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-assignroles',
  templateUrl: './assignroles.component.html',
  styleUrls: ['./assignroles.component.css']
})
export class AssignRolesComponent implements OnInit {
  form: any;
  isLoadingResults = true;
  id: number;
  userId: any;
  objectArray: object[];
  roles: any = [];
  check: boolean;
  userRoles: any = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private snackBar: MatSnackBar, private dialogref: MatDialogRef<AssignRolesComponent>, private activatedRoute: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/roles/', this.httpOptions).subscribe(
      (response: any) => {
        this.isLoadingResults = false;
        this.roles = response
        this.userRoles = this.data.roles
        this.roles.forEach(element => {
          element.hasRole = false;
          this.userRoles.forEach(param => {
            if(element.name == param.name){
              element.hasRole = true;
            }
          });

        });
        console.log(this.roles)
        console.log(this.userRoles)
      },
      err => {
        this.isLoadingResults = false;
      }),
      this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params.id;
      });
  }

  @ViewChildren('checkBox') checkBox: QueryList<any>;
  checked = [];

  getCheckbox(checkbox) {
    this.checked = []
    // resetting each Time new event is fire.
    // filtering only checked vlaue and assign to checked variable.
    const checked = this.checkBox.filter(checkbox => checkbox.checked);

    // then, we make object array of checked, and value by checked variable
    checked.forEach(data => {
      this.checked.push(
        data.value
      )
    })
  }

  assignRoles() {
    var tempRoles = [];
    this.roles.forEach(element => {
      if(element.hasRole) {
        tempRoles.push(element.name)
      }
    })
    this.http.put<any>('https://backend.carfleetmanagementsystem.pl:443/roles', {
      userId: this.userId,
      roles: tempRoles
    }, this.httpOptions)
      .subscribe(
        (response: any) => {
          this.dialogref.close();
        },
        err => {
        });
  }

}
