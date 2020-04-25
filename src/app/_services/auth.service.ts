import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ipaddress  = '';

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
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
