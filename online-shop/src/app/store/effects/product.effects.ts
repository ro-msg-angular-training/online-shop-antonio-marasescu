import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../../services/product.service';
import {
  CreateProduct, CreateProductSuccess,
  EProductActions,
  GetAllProducts,
  GetAllProductsSuccess,
  GetProduct, GetProductFailure,
  GetProductSuccess, RemoveProduct, RemoveProductSuccess, UpdateProduct, UpdateProductSuccess
} from '../actions/product.actions';
import {switchMap, map, catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService,
              private actions$: Actions,
              private location: Location,
              private router: Router) {
  }

  @Effect()
  getAllProducts$ = this.actions$.pipe(
    ofType<GetAllProducts>(EProductActions.GetAllProducts),
    tap(() => {
      console.log('aawr');
      return this.productService.getAllProducts().pipe(
        map(response => new GetAllProductsSuccess(response)),
        catchError(error => {
          console.log('error');
          return of(error);
        })
      );
    }),
  );

  @Effect()
  getProduct$ = this.actions$.pipe(
    ofType<GetProduct>(EProductActions.GetProduct),
    map(action => action.payload),
    switchMap(id => this.productService.getProduct(id).pipe(
      map(response => new GetProductSuccess(response)),
      catchError(error => of(new GetProductFailure(error)))
    ))
  );

  @Effect()
  removeProduct$ = this.actions$.pipe(
    ofType<RemoveProduct>(EProductActions.RemoveProduct),
    map(action => action.payload),
    switchMap(id => this.productService.removeProduct(id).pipe(
      map(() => new RemoveProductSuccess(id))
    ))
  );

  @Effect()
  removeProductSuccess$ = this.actions$.pipe(
    ofType<RemoveProductSuccess>(EProductActions.RemoveProductSuccess),
    tap(() => this.router.navigateByUrl('/'))
  );

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType<UpdateProduct>(EProductActions.UpdateProduct),
    map(action => action.payload),
    switchMap(editedProduct => this.productService.editProduct(editedProduct.id, editedProduct).pipe(
      map(response => new UpdateProductSuccess(response))
    ))
  );

  @Effect()
  updateProductSuccess$ = this.actions$.pipe(
    ofType<UpdateProductSuccess>(EProductActions.UpdateProductSuccess),
    tap(() => this.location.back())
  );


  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType<CreateProduct>(EProductActions.CreateProduct),
    map(action => action.payload),
    switchMap(newProduct => this.productService.createProduct(newProduct).pipe(
      map(response => new CreateProductSuccess(response))
    ))
  );

}
