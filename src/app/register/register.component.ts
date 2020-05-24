import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorName: string;
  errorUsername: string;
  errorEmail: string;
  errorPhoneNumber: string;
  errorPassword: string;
  errorConfirmPassword: string;

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar, public translate: TranslateService) { }

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
        this.isSignUpFailed = true;
        this.translate.stream('Something went wrong!').subscribe((text: string) => {
        this._snackBar.open(text, '', {
          duration: 5000,
          panelClass: ['prompt']
        });
      });
      }
    );
  }
}
