import {AuthUser} from '../../models/auth-user';

export interface IAuthUserState {
  currentUser: AuthUser;
  isAuthenticated: boolean;
  errorMessage: string | null;
}

export const initialUserState: IAuthUserState = {
  currentUser: null,
  isAuthenticated: false,
  errorMessage: null
};
