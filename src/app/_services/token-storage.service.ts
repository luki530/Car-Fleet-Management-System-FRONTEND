import { Injectable } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const LANG_KEY = 'language';
const THEME_KEY = 'theme';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  public saveUserLocal(user: any) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getTokenLocal(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveTokenLocal(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getUserLocal() {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public getLangLocal(){
    return localStorage.getItem(LANG_KEY);
  }

  public saveLangLocal(lang: string){
    window.localStorage.removeItem(LANG_KEY);
    window.localStorage.setItem(LANG_KEY, lang);
  }

  public getThemeLocal(){
    return localStorage.getItem(THEME_KEY);
  }

  public saveThemeLocal(theme: string){
    window.localStorage.removeItem(THEME_KEY);
    window.localStorage.setItem(THEME_KEY, theme);
  }
}
