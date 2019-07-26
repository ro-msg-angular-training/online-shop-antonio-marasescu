import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {selectCurrentAuthUser} from '../store/selectors/auth-user.selectors';
import {AuthUser} from '../models/auth-user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-shopping-cart',
  templateUrl: './page-shopping-cart.component.html',
  styleUrls: ['./page-shopping-cart.component.css']
})
export class PageShoppingCartComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[];
  wasOrderCreated: boolean;
  currentUser: AuthUser;
  user$: Observable<any>;

  constructor(private shoppingCartService: ShoppingCartService,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.loadShoppingCart();
    this.user$ = this.store.select(selectCurrentAuthUser);

    this.user$.subscribe((user) => this.currentUser = user);
  }

  loadShoppingCart() {
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
    this.wasOrderCreated = false;
  }

  checkoutOrder(): void {
    this.shoppingCartService.placeOrder(this.currentUser).subscribe(() => this.shoppingCartService.clearShoppingCart());
    this.loadShoppingCart();
  }

  removeItem(productId: number): void {
    this.shoppingCartService.removeItem(productId);
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
  }

  incrementQuantity(productId: number) {
    this.shoppingCartService.modifyQuantity(productId, +1);
  }

  decrementQuantity(productId: number) {
    this.shoppingCartService.modifyQuantity(productId, -1);
  }
}
