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
  showUsersBoard = false;
  showCarsBoard = false;
  showCarLogsBoard = false;
  username: string;
  ip = '';
  showApp = true;
  faBell = faBell;
  faCog = faCog;
  faInfo = faInfo;

  logo = 'https://lh3.googleusercontent.com/VecsDiDi9Nz6s7UkjRWS116RZ6HG9JEUWsP2ab-n0GIH5Ro6MR8D7LUEo5Z98LadgoKfOJAZTzn6Zdz-E9HmzZOAqkKE2qOqdRr4q_s85zjZcVs0uMwvWhigJCAM0EXhXFOsisW3ptA38YN5gs6RBfSyGzRWOJocBQjhptdc4jQocgJekfURj4ulXqCNHv7poDOw9ixG8vHYWg6MoEm-Q5dSh0HxWyxkrwjxvOxKFC8hndlEJrZIlcPlpPWN2unDIgIwnUYJYA6B8ugnrCzLyZ696ZnEhLOdXkrPX3npBUTJiM4hm13uf3fLfeMJrA9cPMnyumIOOd2mwWUvt0nlNc8e_o-YpehIWVFN9erowxaLvm_UV741P3-EmjFyUwPuR5nNV-ZpPbrU2zqIf3Ud0JKwRyW22d7OAMs3KP_sPMgkiGcPfmAi647eLOLC64tA8ggOBDNx3HeJWQyHdmat5TIQ88xq2oqvFy9Z6-An_12D__EDwsFm0okj1AtiJAsoILrW3Zpnz2IcQXzqyOf3apLSZ1vbf5dTCR6ou1w52ocxvr0iafPbzTHiOLZBNlus9bIvKYzZ9X4x6ogYYqkBKfn1OndyZJRZESFQSDs2WNVpoYtbv8RyW9MZS4x4wZAo2fdI27704VlHu61cCzm0GjGdxr6VgE-ZLt0TfsBf_8FIauCzefY7owaw4J3BXQ=s500-no?authuser=0';

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
      this.showUsersBoard = this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_BOSS') ? true : this.roles.includes('ROLE_ADMIN');
      this.showCarsBoard = this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_BOSS') ? true : this.roles.includes('ROLE_ADMIN');
      // tslint:disable-next-line: max-line-length
      this.showCarLogsBoard = this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_EMPLOYEE') ? true : this.roles.includes('ROLE_BOSS') ? true : this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }

    this.navigation = [
      { link: 'listofusers', label: 'Users', show: this.showUsersBoard },
      { link: 'cars', label: 'Cars', show: this.showCarsBoard },
      { link: 'carlogs', label: 'Car Logs', show: this.showCarLogsBoard }
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
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    this.showUsersBoard = false;
    this.showCarsBoard = false;
    this.showCarLogsBoard = false;
    this.showApp = true;
  }
}
