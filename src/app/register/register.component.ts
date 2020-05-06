import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.sessionStorage.setItem('registrationUsername', this.form.username);
        this.router.navigate(['confirmphonenumber']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this._snackBar.open(this.errorMessage, 'Close', {
          duration: 5000,
          panelClass: ['prompt']
        });
      }
    );
  }
}
