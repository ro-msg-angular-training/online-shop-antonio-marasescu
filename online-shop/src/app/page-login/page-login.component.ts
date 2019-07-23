import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthCredentials} from '../models/auth-credentials';
import {IAppState} from '../store/state/app.state';
import {Store} from '@ngrx/store';
import {GetAuthUser} from '../store/actions/auth-user.actions';
import {selectErrorMessage} from '../store/selectors/auth-user.selectors';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  errorMessage$;


  constructor(private router: Router,
              private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

  submit(payload: AuthCredentials) {
    this.store.dispatch(new GetAuthUser(payload));
  }
}
