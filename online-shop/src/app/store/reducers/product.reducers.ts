import {initialProductState, IProductState} from '../state/product.state';
import {EProductActions, ProductActions} from '../actions/product.actions';

export const productReducers = (state: IProductState = initialProductState, action: ProductActions): IProductState => {
  switch (action.type) {
    case EProductActions.GetAllProductsSuccess:
      return {
        ...state,
        products: action.payload
      };
    case EProductActions.GetProductSuccess:
      return {
        ...state,
        currentProduct: action.payload
      };
    case EProductActions.GetProductFailure:
      return {
        ...state,
        currentProduct: null
      };
    case EProductActions.RemoveProductSuccess:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      };
    case EProductActions.UpdateProductSuccess:
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index === -1) {
        return state;
      }
      const newState = {...state};
      newState.products[index] = action.payload;
      newState.currentProduct = (newState.currentProduct.id === action.payload.id) ? action.payload : newState.currentProduct;
      return newState;
    case EProductActions.CreateProductSuccess:
      return {
        ...state,
        products: state.products.concat([action.payload])
      };
    default:
      return state;
  }
};
