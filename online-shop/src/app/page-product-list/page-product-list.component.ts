import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {selectCurrentAuthUser} from '../store/selectors/auth-user.selectors';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {AuthUser} from '../models/auth-user';
import {selectProducts} from '../store/selectors/product.selectors';
import {GetAllProducts} from '../store/actions/product.actions';

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.css']
})
export class PageProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  user$: Observable<AuthUser>;

  constructor(
    private authService: AuthService,
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    console.log('here 1');
    this.products$ = this.store.select(selectProducts);
    console.log('here 2');
    this.user$ = this.store.select(selectCurrentAuthUser);
    console.log('here 3');
    this.store.dispatch(new GetAllProducts());
    console.log('here 4');
  }

}
