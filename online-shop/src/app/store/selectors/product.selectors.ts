import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {IProductState} from '../state/product.state';

const selectProductState = (state: IAppState) => state.productState;

export const selectCurrentProduct = createSelector(
  selectProductState,
  (state: IProductState) => state.currentProduct
);

export const selectProducts = createSelector(
  selectProductState,
  (state: IProductState) => state.products
);
