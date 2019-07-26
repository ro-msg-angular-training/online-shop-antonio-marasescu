import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {IAuthUserState} from '../state/auth-user.state';

const selectAuthUserState = (state: IAppState) => state.authState;

export const selectCurrentAuthUser = createSelector(
  selectAuthUserState,
  (state: IAuthUserState) => state.currentUser
);

export const selectErrorMessage = createSelector(
  selectAuthUserState,
  (state: IAuthUserState) => state.errorMessage
);
