import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {Store} from "@ngrx/store";
import {IAppState} from "../store/state/app.state";
import {selectCurrentAuthUserRoles} from "../store/selectors/auth-user.selectors";

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.css']
})
export class PageProductListComponent implements OnInit {
  @Input() products: Product[];
  userRoles$;

  constructor(
    private store: Store<IAppState>,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
    this.userRoles$ = this.store.select(selectCurrentAuthUserRoles);
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

}
