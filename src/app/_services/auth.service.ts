import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';
import { GlobalConstants } from '../global-constants';


const AUTH_API = GlobalConstants.URL+'auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ipaddress  = '';
  isChecked: any;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password,
    }, httpOptions);
  }

  confirmphonenumber(user): Observable<any> {
    return this.http.post(AUTH_API + 'confirm-phone-number?code=', {
      username: window.sessionStorage.getItem('registrationUsername'),
      confirmationCode: user.code
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name: user.name,
      username: user.username,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword
    }, httpOptions);
  }

  confirmemail(token): Observable<any> {
    return this.http.post(AUTH_API + 'confirm-email', {
      confirmationToken: token
    }, httpOptions);
  }

  resetpassword(user): Observable<any> {
    return this.http.post(AUTH_API + 'reset-password', {
      username: user.username
    }, httpOptions);
  }
}
