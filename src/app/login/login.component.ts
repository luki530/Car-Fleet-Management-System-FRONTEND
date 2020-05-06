import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isChecked = false;

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private cookieService: CookieService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onChangeChk($event) {
    if ($event.target.checked === true) {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
    } else if ($event.target.checked === false) {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        if (this.isChecked) {
          this.tokenStorage.saveTokenLocal(data.accessToken);
          this.tokenStorage.saveUserLocal(data);
        }
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this._snackBar.open(this.errorMessage, 'Close', {duration: 5000,
        panelClass: ['prompt']});
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

