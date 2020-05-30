import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from '../_services/token-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteAccountComponent implements OnInit {
  userId: any;
  warningMessage: string;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUsersBoard = false;
  showCarsBoard = false;
  showCarLogsBoard = false;
  showApp = true;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  // tslint:disable-next-line: max-line-length
  constructor(private tokenStorage: TokenStorageService, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, public dialogref: MatDialogRef<DeleteAccountComponent>, private translate: TranslateService) { }


  ngOnInit(){
  }

  return() {
    this.tokenStorage.signOut();
    this.reloadContext();
    this.router.navigate(['home']);
  }

  reloadContext() {
    this.showApp = false;
    this.ngOnInit();
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    this.showUsersBoard = false;
    this.showCarsBoard = false;
    this.showCarLogsBoard = false;
    this.showApp = true;
  }

  deleteAccount(): void {
    // tslint:disable-next-line: max-line-length
    this.http.delete<any>('https://backend.carfleetmanagementsystem.pl:443/myprofile', this.httpOptions).subscribe(() => {
      console.log('success');
      this.translate.getStreamOnTranslationChange('Your account has been deleted!').subscribe((text:string) => {
      this.snackBar.open(text, '', {
        duration: 5000,
        panelClass: ['prompt']
      });
      this.dialogref.close();
    });
    });
  }

}
