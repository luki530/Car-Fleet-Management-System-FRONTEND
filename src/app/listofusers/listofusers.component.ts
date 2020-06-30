import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';


@Injectable()
@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})

export class ListOfUsersComponent implements OnInit {
  form: any;
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  displayedColumns = ['id', 'username', 'email'];
  id: number;
  users: any = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // tslint:disable-next-line: max-line-length
  constructor(private title: Title,private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute, private translate: TranslateService) {
    title.setTitle('Users')
   }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  ngOnInit() {
    this.translate.stream('Items per page:').subscribe((text: string) => {
      this.paginator._intl.itemsPerPageLabel = text;
    });
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofusers', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.isLoadingResults = false;
          this.users = data;
        },
        err => {
          this.isLoadingResults = false;
        }),
      this.activatedRoute.queryParams.subscribe(params => {
        this.id = params.id;
      });
  }

  btnClick(newValue: number) {
    this.router.navigate(['/userprofile'], { queryParams: { id: newValue }, relativeTo: this.activatedRoute });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

