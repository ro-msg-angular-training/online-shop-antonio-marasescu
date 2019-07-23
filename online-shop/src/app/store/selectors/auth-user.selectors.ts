import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {IAuthUserState} from '../state/auth-user.state';

const selectAuthUserState = (state: IAppState) => state.authState;

export const selectCurrentAuthUser = createSelector(
  selectAuthUserState,
  (state: IAuthUserState) => state.currentUser
);

export const selectCurrentAuthUserRoles = createSelector(
  selectAuthUserState,
  (state: IAuthUserState) => state.currentUser.roles
);

export const selectIsAuthenticated = createSelector(
  selectAuthUserState,
  (state: IAuthUserState) => state.isAuthenticated
);

export const selectErrorMessage = createSelector(
  selectAuthUserState,
  (state: IAuthUserState) => state.errorMessage
);
