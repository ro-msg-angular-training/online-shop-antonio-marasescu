import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {EAuthUserActions, GetAuthUser, GetAuthUserSuccess} from '../actions/auth-user.actions';
import {switchMap, map} from 'rxjs/operators';
import {AuthUser} from '../../models/auth-user';
import {of} from 'rxjs';

@Injectable()
export class AuthUserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetAuthUser>(EAuthUserActions.GetAuthUser),
    map((action) => action.payload),
    switchMap((credentials) => this.authService.authenticate(credentials.username, credentials.password)),
    switchMap((authUser: AuthUser) => of(new GetAuthUserSuccess(authUser)))
  );

  constructor(
    private authService: AuthService,
    private actions$: Actions
  ) {
  }
}
