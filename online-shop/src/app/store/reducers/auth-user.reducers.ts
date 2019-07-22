import {IAuthUserState, initialUserState} from '../state/auth-user.state';
import {AuthUserActions, EAuthUserActions} from '../actions/auth-user.actions';

export const userReducers = (state = initialUserState, action: AuthUserActions): IAuthUserState => {
  switch (action.type) {
    case EAuthUserActions.GetAuthUserSuccess:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
