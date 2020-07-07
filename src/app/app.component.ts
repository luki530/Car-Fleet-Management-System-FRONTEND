import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from "./theme.service";
import { slideInAnimation } from './route-animation';

import * as Hammer from 'hammerjs';
import { MatSidenav } from '@angular/material/sidenav';
import { DateAdapter } from '@angular/material/core';

import { GlobalConstants } from './global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUsersBoard: boolean;
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
  options;
  // zoom
  // lat
  // lng
  // getAddress
  // longitude
  // latitude
  // currentLocation: string;
  today: number = Date.now();
  logo = 'https://i.ibb.co/p0wGs3w/logo.png';
  close: boolean;
  // public innerWidth: any;
  //

  @ViewChild(MatSidenav)
  public sidenav: MatSidenav;


  constructor(public elementRef: ElementRef, private tokenStorageService: TokenStorageService, private http: HttpClient, private router: Router, public translate: TranslateService, public themeService: ThemeService, private dateAdapter: DateAdapter<Date>) {
    translate.addLangs(['en', 'pl', 'de', 'ja']);
    translate.setDefaultLang('en');
    themeService.setTheme("purple-green");

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const hammertime = new Hammer(this.elementRef.nativeElement, {});
      hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
      hammertime.on('panright', () => {
        this.sidenav.open();
        this.close = true;
      });
      hammertime.on('panleft', () => {
        this.sidenav.close();
        this.close = false;
      });
    }

    setInterval(() => { this.today = Date.now() }, 1);
  }



  switchLang(lang: string) {
    this.translate.use(lang);
    this.tokenStorageService.saveLangLocal(lang);
    this.dateAdapter.setLocale(lang);
  }


  // get() {


  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position: Position) => {
  //       if (position) {
  //         this.lat = position.coords.latitude;
  //         this.lng = position.coords.longitude;
  //         this.getAddress = (this.lat, this.lng);

  //         this.apiloader.load().then(() => {
  //           let geocoder = new google.maps.Geocoder;
  //           let latlng = { lat: this.lat, lng: this.lng };

  //           geocoder.geocode({ 'location': latlng }, function (results) {
  //             if (results[0]) {
  //               this.currentLocation = results[0].formatted_address;

  //             }
  //           });
  //         });


  //       }
  //     })
  //   }

  // }

  // mapClicked($event: MouseEvent) {

  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;

  //   this.apiloader.load().then(() => {
  //     let geocoder = new google.maps.Geocoder;
  //     let latlng = { lat: this.latitude, lng: this.longitude };

  //     geocoder.geocode({ 'location': latlng }, function (results) {
  //       if (results[0]) {
  //         this.currentLocation = results[0].formatted_address;
  //       }
  //     });
  //   });
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {

  //   this.innerWidth = window.innerWidth;

  //   if (this.innerWidth < 764) {
  //

  //   } else {
  //     this.hammertime.on('panright', () => false);
  //     this.hammertime.on('panleft', () => false);
  //     console.log("dupa")
  //   }
  // }

  ngOnInit() {

    // this.get();
    // this.zoom = 1;
    // this.hammertime;

    this.translate.stream(['Deep Purple & Amber', 'Indigo & Pink', 'Pink & Blue Grey', 'Purple & Green', 'Cyan & Yellow']).subscribe((text: string[]) => {
      this.options = [
        {
          "backgroundColor": "#fff",
          "buttonColor": "#ffc107",
          "headingColor": "#673ab7",
          "label": text['Deep Purple & Amber'],
          "value": "deeppurple-amber"
        },
        {
          "backgroundColor": "#fff",
          "buttonColor": "#ff4081",
          "headingColor": "#3f51b5",
          "label": text['Indigo & Pink'],
          "value": "indigo-pink"
        },
        {
          "backgroundColor": "#303030",
          "buttonColor": "#607d8b",
          "headingColor": "#e91e63",
          "label": text['Pink & Blue Grey'],
          "value": "pink-bluegrey"
        },
        {
          "backgroundColor": "#303030",
          "buttonColor": "#4caf50",
          "headingColor": "#9c27b0",
          "label": text['Purple & Green'],
          "value": "purple-green"
        },
        {
          "backgroundColor": "#303030",
          "buttonColor": "#ffff00",
          "headingColor": "#00ffff",
          "label": text['Cyan & Yellow'],
          "value": "cyan-yellow"
        }
      ];

    });

    if (!!this.tokenStorageService.getLangLocal()) {
      this.switchLang(this.tokenStorageService.getLangLocal());
    } else {
      this.switchLang('en');
    }

    if (!!this.tokenStorageService.getThemeLocal()) {
      this.changeTheme(this.tokenStorageService.getThemeLocal());
    }

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
    this.tokenStorageService.saveThemeLocal(themeToSet)
  }

  logout() {
    this.tokenStorageService.signOut();
    this.reloadContext();
    this.showApp = false;
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    this.showUsersBoard = false;
    this.showCarsBoard = false;
    this.showCarLogsBoard = false;
    this.router.navigate(['logoutpage']);
  }

  reloadContext() {

    this.ngOnInit();
    this.showApp = true;

  }
}
