import {initialUserState, IAuthUserState} from './auth-user.state';

export interface IAppState {
  authState: IAuthUserState;
}

export const initialAppState: IAppState = {
  authState: initialUserState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
