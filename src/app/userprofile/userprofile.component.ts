import { Component, OnInit, ViewChild, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddCardComponent } from '../addcard/addcard.component';
import { DeleteUserComponent } from '../deleteuser/deleteuser.component';
import { AssignRolesComponent } from '../assignroles/assignroles.component';

@Injectable()
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  form: any;
  isLoggedIn = false;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  roles = [];
  userId: any;
  cardId: string;
  names: any = [];

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.id;
    });
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/userprofile?id=' + this.userId, this.httpOptions)
      .subscribe(
        (data: any) => {
          this.name = data.name;
          this.username = data.username;
          this.phoneNumber = data.phoneNumber;
          this.email = data.email;
          this.roles = data.roles;
          if (!(data.card == null)) {
            this.cardId = data.card.cardId;
          }
          console.log(data)
        },
        err => {
        });
  }

  addCard(): void {
    let dialogRef = this.dialog.open(AddCardComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  assignRoles(): void {
    let dialogRef = this.dialog.open(AssignRolesComponent, { data: {
      'roles': this.roles
    }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteUser(): void {
    let dialogRef = this.dialog.open(DeleteUserComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }
}

