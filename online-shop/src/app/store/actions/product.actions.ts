import {Action} from '@ngrx/store';
import {Product} from '../../models/product';

export enum EProductActions {
  GetAllProducts = '[Product] Get All Products',
  GetAllProductsSuccess = '[Product] Get All Products Success',
  GetAllProductsFailure = '[Product] Get All Products Failure',
  GetProduct = '[Product] Get Product',
  GetProductSuccess = '[Product] Get Product Success',
  GetProductFailure = '[Product] Get Product Failure',
  RemoveProduct = '[Product] Remove Product',
  RemoveProductSuccess = '[Product] Remove Product Success',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  CreateProduct = '[Product] Create Product',
  CreateProductSuccess = '[Product] Create Product Success'
}

export class GetAllProducts implements Action {
  public readonly type = EProductActions.GetAllProducts;

  constructor() {
  }
}

export class GetAllProductsSuccess implements Action {
  public readonly type = EProductActions.GetAllProductsSuccess;

  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsFailure implements Action {
  public readonly type = EProductActions.GetAllProductsFailure;

  constructor(public payload: Product[]) {
  }
}

export class GetProduct implements Action {
  public readonly type = EProductActions.GetProduct;

  constructor(public payload: number) {
  }
}

export class GetProductSuccess implements Action {
  public readonly type = EProductActions.GetProductSuccess;

  constructor(public payload: Product) {
  }
}

export class GetProductFailure implements Action {
  public readonly type = EProductActions.GetProductFailure;

  constructor(public payload: any) {
  }
}

export class RemoveProduct implements Action {
  public readonly type = EProductActions.RemoveProduct;

  constructor(public payload: number) {
  }
}

export class RemoveProductSuccess implements Action {
  public readonly type = EProductActions.RemoveProductSuccess;

  constructor(public payload: number) {
  }
}

export class UpdateProduct implements Action {
  public readonly type = EProductActions.UpdateProduct;

  constructor(public payload: Product) {
  }
}

export class UpdateProductSuccess implements Action {
  public readonly type = EProductActions.UpdateProductSuccess;

  constructor(public payload: Product) {
  }
}

export class CreateProduct implements Action {
  public readonly type = EProductActions.CreateProduct;

  constructor(public payload: Product) {
  }
}

export class CreateProductSuccess implements Action {
  public readonly type = EProductActions.CreateProductSuccess;

  constructor(public payload: Product) {
  }
}

export type ProductActions =
  GetAllProducts
  | GetAllProductsSuccess
  | GetAllProductsFailure
  | GetProduct
  | GetProductSuccess
  | GetProductFailure
  | RemoveProduct
  | RemoveProductSuccess
  | UpdateProduct
  | UpdateProductSuccess
  | CreateProduct
  | CreateProductSuccess;
