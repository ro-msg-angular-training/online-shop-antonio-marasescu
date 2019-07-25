import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';
import {Location} from '@angular/common';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {Observable} from 'rxjs';
import {GetProduct, UpdateProduct} from '../store/actions/product.actions';
import {selectCurrentProduct} from '../store/selectors/product.selectors';

@Component({
  selector: 'app-page-product-edit',
  templateUrl: './page-product-edit.component.html',
  styleUrls: ['./page-product-edit.component.css']
})
export class PageProductEditComponent implements OnInit {
  product$: Observable<Product>;
  private productId: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private location: Location,
              private store: Store<IAppState>) {
  }
  ngOnInit() {
    this.product$ = this.store.select(selectCurrentProduct);
    this.getProduct();
  }
  getProduct(): void {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.store.dispatch(new GetProduct(this.productId));
  }
  editProduct(editedProduct: Product) {
    editedProduct.id = this.productId;
    this.store.dispatch(new UpdateProduct(editedProduct));
  }
}
