import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {authReducers} from './auth-user.reducers';
import {productReducers} from './product.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  authState: authReducers,
  productState: productReducers
};
