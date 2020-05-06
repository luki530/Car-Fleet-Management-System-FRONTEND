import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  username: string;
  ip = '';
  showApp = true;
  faBell = faBell;
  faCog = faCog;
  faInfo = faInfo;

  logo = ('../assets/logo.png');

  navigation = [];


  constructor(private tokenStorageService: TokenStorageService, private http: HttpClient, private router: Router) { }

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

      this.username = user.username;
    }
    this.navigation = [
      { link: 'admin', label: 'Admin board', show: this.showAdminBoard },
      { link: 'listofusers', label: 'List of users' }
    ];
  }

  logout() {
    this.tokenStorageService.signOut();
    this.reloadContext();
    this.router.navigate(['logoutpage']);
  }

  reloadContext() {
    this.showApp = false;
    this.ngOnInit();
    this.showApp = true;
  }
}
