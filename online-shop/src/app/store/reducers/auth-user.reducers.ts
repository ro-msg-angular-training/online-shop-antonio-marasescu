import {IAuthUserState, initialUserState} from '../state/auth-user.state';
import {AuthUserActions, EAuthUserActions} from '../actions/auth-user.actions';

export const authReducers = (state: IAuthUserState = initialUserState, action: AuthUserActions): IAuthUserState => {
  switch (action.type) {
    case EAuthUserActions.GetAuthUserSuccess:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload
      };
    case EAuthUserActions.GetAuthUserFailure:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: 'Wrong username or password!'
      };
    default:
      return state;
  }
};
