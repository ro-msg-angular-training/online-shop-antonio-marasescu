import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AuthUser} from '../models/auth-user';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthCredentials} from '../models/auth-credentials';
import {IAppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {GetAuthUser} from "../store/actions/auth-user.actions";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {

  errorMessage: HttpErrorResponse;


  constructor(private router: Router,
              private store: Store<IAppState>) {
  }

  submit(payload: AuthCredentials) {
    this.store.dispatch(new GetAuthUser(payload));
    // this.authService.authenticate(payload.username, payload.password)
    //   .subscribe((user: AuthUser) => {
    //     this.authService.user = user;
    //     return this.router.navigateByUrl('');
    //   }, error => this.errorMessage = error);
  }
}
