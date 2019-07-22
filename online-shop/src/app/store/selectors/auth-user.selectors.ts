import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {IAuthUserState} from '../state/auth-user.state';

const selectAuthUserState = (state: IAppState) => state.userState;

export const selectCurrentAuthUser = createSelector(
  selectAuthUserState,
  (state: IAuthUserState) => state.currentUser
);
