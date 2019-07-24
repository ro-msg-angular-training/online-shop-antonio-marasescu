import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {selectCurrentAuthUser} from '../store/selectors/auth-user.selectors';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.css']
})
export class PageProductListComponent implements OnInit {
  @Input() products: Product[];
  user$: Observable<any>;

  constructor(
    private authService: AuthService,
    private store: Store<IAppState>,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
    this.user$ = this.store.select(selectCurrentAuthUser);
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

}
