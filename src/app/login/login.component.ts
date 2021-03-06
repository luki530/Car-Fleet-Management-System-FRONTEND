import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from "@angular/platform-browser"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() refreshContext = new EventEmitter();
  form: any = { isChecked: false };
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  errorUsername: string;
  errorPassword: string;
  msg: string;


  // tslint:disable-next-line: max-line-length
  constructor(private title: Title, private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService, private cookieService: CookieService, private _snackBar: MatSnackBar, private translate: TranslateService) {
    title.setTitle('Login')
  }

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
        this.translate.getStreamOnTranslationChange('Signed In!').subscribe((text:string) => {
        this._snackBar.open(text, '', {
          duration: 5000,
          panelClass: ['advice']
        });
        this.refreshContext.next();
        this.router.navigate(['home']);
      });
      },
      err => {
        this.isLoginFailed = true;
        this.translate.getStreamOnTranslationChange('Unauthorized').subscribe((text:string) => {
        this._snackBar.open(text, '', {
          duration: 5000,
          panelClass: ['prompt']
        });
        });
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

