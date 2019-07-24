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
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<AuthUser> {
    const payload = {username, password};
    return this.http.post<AuthUser>(this.authUrl, payload, this.httpOptions);
  }

  isAdmin(user): boolean {
    return user.roles.includes(AppConfig.ROLE_ADMIN);
  }

  isUser(user): boolean {
    return user.roles.includes(AppConfig.ROLE_USER);
  }

  isCustomer(user): boolean {
    return user.roles.includes(AppConfig.ROLE_CUSTOMER);
  }
}
