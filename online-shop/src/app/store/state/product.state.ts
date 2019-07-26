import {Product} from '../../models/product';

export interface IProductState {
  currentProduct: Product;
  products: Product[];
  errorMessage: string | null;
}

export const initialProductState: IProductState = {
  currentProduct: null,
  products: [],
  errorMessage: null
};
