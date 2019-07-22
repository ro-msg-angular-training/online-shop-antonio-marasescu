import {AuthUser} from '../../models/auth-user';

export interface IAuthUserState {
  currentUser: AuthUser;
}

export const initialUserState: IAuthUserState = {
  currentUser: null
};
