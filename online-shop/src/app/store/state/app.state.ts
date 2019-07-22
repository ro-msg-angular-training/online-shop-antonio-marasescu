import {initialUserState, IAuthUserState} from './auth-user.state';

export interface IAppState {
  userState: IAuthUserState;
}

export const initialAppState: IAppState = {
  userState: initialUserState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
