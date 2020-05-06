import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: any = {};
  errorMessage = '';
  isSuccessful = false;
  isFailed = false;

  constructor(private authService: AuthService, private http: HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
      this.authService.resetpassword(this.form).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isFailed = false;
          this._snackBar.open('Reset password email has been sent', 'Close', {
            duration: 5000,
            panelClass: ['advice']
          });
        },
        err => {
          this.errorMessage = err.error.message;
          this.isFailed = true;
          this._snackBar.open(this.errorMessage, 'Close', {
            duration: 5000,
            panelClass: ['prompt']
          });
        }
      );
  }

}
