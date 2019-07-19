import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AuthUser} from '../models/auth-user';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {


  private errorMessage: HttpErrorResponse;


  constructor(private router: Router,
              private authService: AuthService) {
  }

  submit(payload) {
    this.authService.authenticate(payload.username, payload.password)
      .subscribe((user: AuthUser) => {
        this.authService.user = user;
        return this.router.navigateByUrl('');
      }, error => this.errorMessage = error);
  }
}
