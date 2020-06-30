import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-confirmphonenumber',
  templateUrl: './confirmphonenumber.component.html',
  styleUrls: ['./confirmphonenumber.component.css']
})
export class ConfirmPhoneNumberComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isCodeInvalid = false;
  errorVerificationCode: string;

  constructor(private title: Title,private http: HttpClient, private authService: AuthService, private _snackBar: MatSnackBar, private translate: TranslateService) {
    title.setTitle('Confirm Phone Number')
   }


  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.confirmphonenumber(this.form).subscribe(response => {
      this.isSuccessful = true,
      this.isCodeInvalid = false,
      this.translate.getStreamOnTranslationChange('Your phone number has been confirmed!').subscribe((text:string) => {
      this._snackBar.open(text, '', {
        duration: 5000,
        panelClass: ['advice']
      });
    });
    form.resetForm();
    }
      , err => {
        this.isCodeInvalid = true;
        this.translate.getStreamOnTranslationChange('Wrong code has been provided!').subscribe((text:string) => {
        this._snackBar.open(text, '', {
          duration: 5000,
          panelClass: ['prompt']
        });
      });
    });
  }

}
