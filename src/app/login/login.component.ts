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
  form: any = {isChecked: false};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private cookieService: CookieService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        if (this.form.isChecked) {
          this.tokenStorage.saveTokenLocal(data.accessToken);
          this.tokenStorage.saveUserLocal(data);
        }
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this._snackBar.open("Signed in !", 'Close', {
          duration: 5000,
          panelClass: ['advice']
        });
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this._snackBar.open(this.errorMessage, 'Close', {
          duration: 5000,
          panelClass: ['prompt']
        });
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

