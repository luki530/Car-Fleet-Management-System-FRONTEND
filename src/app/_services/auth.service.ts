import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Forwarded-For' : window.sessionStorage.getItem('CLIENT_IP')})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ipaddress  = '';

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    console.log(httpOptions.headers.get('X-Forwarded-For'));
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
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

  // confirmemail(): Observable<any> {
  //   return this.http.post(AUTH_API + 'confirmemail', {}, httpOptions);
  // }

  resetpassword(user): Observable<any> {
    return this.http.post(AUTH_API + 'reset-password', {
      username: user.username
    }, httpOptions);
  }
}
