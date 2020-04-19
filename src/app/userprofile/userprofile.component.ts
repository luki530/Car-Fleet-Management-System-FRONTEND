import { Component, OnInit, ViewChild, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddCardComponent } from '../addcard/addcard.component';

@Injectable()
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  isLoadingResults = true;
  form: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id', 'username', 'email', 'phoneNumber', 'name', 'cardId', 'buttons'];
  userId: any;
  cardId: any;
  value: AddCardComponent['value'];

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

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
    this.http.get<any>('http://localhost:8080/userprofile?id=' + this.userId, this.httpOptions)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.dataSource = new MatTableDataSource(Array(data));
          this.isLoadingResults = false;
        },
        err => {
          this.isLoadingResults = false;
        });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AddCardComponent, dialogConfig);
  }
}

