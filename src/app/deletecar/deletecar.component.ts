import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-deletecar',
  templateUrl: './deletecar.component.html',
  styleUrls: ['./deletecar.component.css']
})
export class DeleteCarComponent implements OnInit {
  carId: any;
  warningMessageCar: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, private dialogref: MatDialogRef<DeleteCarComponent>, private translate: TranslateService) { }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
    this.carId = params.id;
  });
}
  deleteCar(): void {
    this.http.delete<any>('https://backend.carfleetmanagementsystem.pl:443/listofcars/' + this.carId, this.httpOptions).subscribe(() => {
      console.log('success');
      this.router.navigate(['/cars']);
      this.translate.getStreamOnTranslationChange('Car has been deleted!').subscribe((text:string) => {
      this.snackBar.open(text, '', {
        duration: 5000,
        panelClass: ['prompt']
      });
      this.dialogref.close();
    });
    });
  }
}
