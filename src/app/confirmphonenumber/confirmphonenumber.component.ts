import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-confirmphonenumber',
  templateUrl: './confirmphonenumber.component.html',
  styleUrls: ['./confirmphonenumber.component.css']
})
export class ConfirmPhoneNumberComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isCodeInvalid = false;
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private authService: AuthService, private _snackBar: MatSnackBar) { }


  ngOnInit() {
  }

  onSubmit() {
    this.authService.confirmphonenumber(this.form).subscribe(response => {
      console.log(response),
      this.isSuccessful = true,
      this.isCodeInvalid = false,
      this.successMessage = response.message;
      this._snackBar.open(this.successMessage, 'Close', {
        duration: 5000,
        panelClass: ['advice']
      });
    }
      , err => {
        this.errorMessage = err.error.message;
        this.isCodeInvalid = true;
        this._snackBar.open(this.errorMessage, 'Close', {
          duration: 5000,
          panelClass: ['prompt']
        });
      });
  }

}
