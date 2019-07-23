import {Injectable, OnInit} from '@angular/core';
import {AppConfig} from '../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthUser} from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = AppConfig.API_ENDPOINT + '/login';
  private authUser: AuthUser;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  set user(data) {
    this.authUser = data;
  }

  get user(): AuthUser {
    return this.authUser;
  }

  authenticate(username: string, password: string): Observable<AuthUser> {
    const payload = {username, password};
    return this.http.post<AuthUser>(this.authUrl, payload, this.httpOptions);
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  get isAdmin(): boolean {
    return this.user.roles.includes(AppConfig.ROLE_ADMIN);
  }

  get isUser(): boolean {
    return this.user.roles.includes(AppConfig.ROLE_USER);
  }

  get isCustomer(): boolean {
    return this.user.roles.includes(AppConfig.ROLE_CUSTOMER);
  }
}
