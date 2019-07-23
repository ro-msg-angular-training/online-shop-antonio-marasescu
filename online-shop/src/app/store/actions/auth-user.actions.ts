import {Action} from '@ngrx/store';
import {AuthUser} from '../../models/auth-user';
import {AuthCredentials} from '../../models/auth-credentials';

export enum EAuthUserActions {
  GetAuthUser = '[Auth-User] Get User',
  GetAuthUserSuccess = '[Auth-User] Get User Success',
  GetAuthUserFailure = '[Auth-User] Get User Failure'
}

export class GetAuthUser implements Action {
  public readonly type = EAuthUserActions.GetAuthUser;

  constructor(public payload: AuthCredentials) {
  }
}

export class GetAuthUserSuccess implements Action {
  public readonly type = EAuthUserActions.GetAuthUserSuccess;

  constructor(public payload: AuthUser) {
  }
}

export class GetAuthUserFailure implements Action {
  public readonly type = EAuthUserActions.GetAuthUserFailure;

  constructor(public payload: any) {
  }
}

export type AuthUserActions = GetAuthUser | GetAuthUserSuccess | GetAuthUserFailure;
