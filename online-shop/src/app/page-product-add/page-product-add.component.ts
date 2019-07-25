import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {Location} from '@angular/common';
import {ShoppingCartService} from "../services/shopping-cart.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../store/state/app.state";
import {CreateProduct} from "../store/actions/product.actions";

@Component({
  selector: 'app-page-product-add',
  templateUrl: './page-product-add.component.html',
  styleUrls: ['./page-product-add.component.css']
})
export class PageProductAddComponent {

  constructor(private location: Location,
              private store: Store<IAppState>) {
  }

  createProduct(product: Product) {
    this.store.dispatch(new CreateProduct(product));
  }
}
