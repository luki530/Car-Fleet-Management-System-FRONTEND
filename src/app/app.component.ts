import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUsersBoard = false;
  showCarsBoard = false;
  showCarLogsBoard = false;
  username: string;
  ip = '';
  showApp = true;
  faBell = faBell;
  faCog = faCog;
  faInfo = faInfo;
  Abbr: string;
  Title: string;
  selected:string;

  logo = 'https://i.ibb.co/p0wGs3w/logo.png';


  constructor(private tokenStorageService: TokenStorageService, private http: HttpClient, private router: Router,public translate: TranslateService) {
    translate.addLangs(['en', 'pl','de']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }


  ngOnInit() {

    if (!!this.tokenStorageService.getTokenLocal()) {
      this.tokenStorageService.saveToken(this.tokenStorageService.getTokenLocal());
      this.tokenStorageService.saveUser(this.tokenStorageService.getUserLocal());
    }
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUsersBoard = this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_BOSS') ? true : this.roles.includes('ROLE_ADMIN');
      this.showCarsBoard = this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_BOSS') ? true : this.roles.includes('ROLE_ADMIN');
      // tslint:disable-next-line: max-line-length
      this.showCarLogsBoard = this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_BOSS') ? true : this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }


  }

  logout() {
    this.tokenStorageService.signOut();
    this.reloadContext();
    this.router.navigate(['logoutpage']);
  }

  reloadContext() {
    this.showApp = false;
    this.ngOnInit();
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    this.showUsersBoard = false;
    this.showCarsBoard = false;
    this.showCarLogsBoard = false;
    this.showApp = true;
  }
}
