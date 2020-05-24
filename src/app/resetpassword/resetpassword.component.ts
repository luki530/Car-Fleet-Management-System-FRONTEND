import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: any = {};
  errorMessageResetPassword: any;
  isSuccessful = false;
  isFailed = false;

  constructor(private authService: AuthService, private http: HttpClient, private _snackBar: MatSnackBar, public translate: TranslateService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.resetpassword(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
        this.translate.getStreamOnTranslationChange('Email for password reset has been sent to your email!').subscribe((text: string) => {
          this._snackBar.open(text, 'Close', {
            duration: 5000,
            panelClass: ['advice']
          });
        });
      },
      err => {
        this.isFailed = true;
        this.translate.getStreamOnTranslationChange('User not found!','Close').subscribe((text: string) => {
          this._snackBar.open(text, '',{
            duration: 5000,
            panelClass: ['prompt']
          });
        }
        );
      });
  }
}
