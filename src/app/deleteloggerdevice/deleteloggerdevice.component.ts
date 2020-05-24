import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-deleteloggerdevice',
  templateUrl: './deleteloggerdevice.component.html',
  styleUrls: ['./deleteloggerdevice.component.css']
})
export class DeleteLoggerDeviceComponent implements OnInit {
  loggerDeviceId: any;
  warningMessageLoggerDevice: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, public dialogref: MatDialogRef<DeleteLoggerDeviceComponent>, private translate: TranslateService) { }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.loggerDeviceId = params.id;
    });
  }

  deleteLoggerDevice(): void {
    // tslint:disable-next-line: max-line-length
    this.http.delete<any>('https://backend.carfleetmanagementsystem.pl:443/listofloggerdevices/' + this.loggerDeviceId, this.httpOptions).subscribe(() => {
      console.log('success');
      this.router.navigate(['/cars']);
      this.translate.stream('Logger device has been deleted !').subscribe((text:string) => {
      this.snackBar.open(text, '', {
        duration: 5000,
        panelClass: ['prompt']
      });
      this.dialogref.close();
    });
    });
  }
}
