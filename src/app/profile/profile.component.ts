import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  form: any;
  isLoggedIn = false;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  roles = [];

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + this.tokenStorage.getToken()
    })
  };


  ngOnInit() {
    this.http.get<any>('https://backend.carfleetmanagementsystem.pl:443/myprofile', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.name = data.name;
          this.username = data.username;
          this.phoneNumber = data.phoneNumber;
          this.email = data.email;
          this.roles = data.roles;
          console.log(this.roles);
        },
        err => {
        });
  }
}


