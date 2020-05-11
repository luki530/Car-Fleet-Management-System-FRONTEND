import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, public dialogref: MatDialogRef<DeleteUserComponent>) { }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.id;
    });
  }

  deleteUser(): void {
    // tslint:disable-next-line: max-line-length
    this.http.delete<any>('https://backend.carfleetmanagementsystem.pl:443/userprofile/' + this.userId, this.httpOptions).subscribe(() => {
      console.log('success');
      this.router.navigate(['/listofusers']);
      this.snackBar.open('User has been deleted !', 'Close', {
        duration: 5000,
        panelClass: ['prompt']
      });
      this.dialogref.close();
    });
  }

}
