import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private title: Title, private authService: AuthService, private http: HttpClient, private _snackBar: MatSnackBar, public translate: TranslateService) {
    title.setTitle("Reset Password")
   }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.resetpassword(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isFailed = false;
        this.translate.getStreamOnTranslationChange('emailResetMessage').subscribe((text: string) => {
          this._snackBar.open(text, '', {
            duration: 5000,
            panelClass: ['advice']
          });
        });
      },
      err => {
        this.isFailed = true;
        this.translate.getStreamOnTranslationChange('User not found!').subscribe((text: string) => {
          this._snackBar.open(text, '',{
            duration: 5000,
            panelClass: ['prompt']
          });
        }
        );
      });
  }
}
