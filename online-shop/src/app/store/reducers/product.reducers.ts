import {initialProductState, IProductState} from '../state/product.state';
import {ProductActions} from '../actions/product.actions';

export const productReducers = (state = initialProductState, action: ProductActions): IProductState => {
  switch (action.type) {

    default:
      return state;
  }
};
