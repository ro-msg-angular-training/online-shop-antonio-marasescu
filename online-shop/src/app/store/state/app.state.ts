import {initialUserState, IAuthUserState} from './auth-user.state';
import {initialProductState, IProductState} from './product.state';

export interface IAppState {
  authState: IAuthUserState;
  productState: IProductState;
}

export const initialAppState: IAppState = {
  authState: initialUserState,
  productState: initialProductState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
