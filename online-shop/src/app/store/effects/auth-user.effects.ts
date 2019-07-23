import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {EAuthUserActions, GetAuthUser, GetAuthUserFailure, GetAuthUserSuccess} from '../actions/auth-user.actions';
import {switchMap, map, catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthUserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetAuthUser>(EAuthUserActions.GetAuthUser),
    map((action) => action.payload),
    switchMap(credentials => this.authService.authenticate(credentials.username, credentials.password).pipe(
      map((user) => new GetAuthUserSuccess(user)),
      catchError((error) => of(new GetAuthUserFailure(error)))
      )
    )
  );

  @Effect({dispatch: false})
  getAuthUserSuccess$ = this.actions$.pipe(
    ofType<GetAuthUserSuccess>(EAuthUserActions.GetAuthUserSuccess),
    tap(
      (user) => {
        this.authService.user = user.payload;
        this.router.navigateByUrl('/');
      }
    )
  );

  @Effect({dispatch: false})
  getAuthUserFailure$ = this.actions$.pipe(
    ofType<GetAuthUserFailure>(EAuthUserActions.GetAuthUserFailure),
    tap(() => {
      this.authService.user = null;
    })
  );

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router
  ) {
  }
}
