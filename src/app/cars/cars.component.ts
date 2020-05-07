import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  form: any;
  dataSource: MatTableDataSource<any>;
  isLoadingResults = true;
  displayedColumns = ['id', 'model', 'plateNumber', 'blocked'];
  id: number;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  ngOnInit() {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/listofcars', this.httpOptions)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.isLoadingResults = false;
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

