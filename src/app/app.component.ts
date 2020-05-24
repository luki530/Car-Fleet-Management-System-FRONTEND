import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { Observable } from "rxjs";

import { Option } from "./option.model";
import { ThemeService } from "./theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  options = [
    {
      "backgroundColor": "#fff",
      "buttonColor": "#ffc107",
      "headingColor": "#673ab7",
      "label": "Deep Purple & Amber",
      "value": "deeppurple-amber"
    },
    {
      "backgroundColor": "#fff",
      "buttonColor": "#ff4081",
      "headingColor": "#3f51b5",
      "label": "Indigo & Pink",
      "value": "indigo-pink"
    },
    {
      "backgroundColor": "#303030",
      "buttonColor": "#607d8b",
      "headingColor": "#e91e63",
      "label": "Pink & Blue Grey",
      "value": "pink-bluegrey"
    },
    {
      "backgroundColor": "#303030",
      "buttonColor": "#4caf50",
      "headingColor": "#9c27b0",
      "label": "Purple & Green",
      "value": "purple-green"
    }
  ];

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

    // this.themeService.setTheme("deeppurple-amber");

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

  changeTheme(themeToSet) {
    this.themeService.setTheme(themeToSet);
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
