import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {ShoppingCartService} from '../services/shopping-cart.service';

@Component({
  selector: 'app-page-shopping-cart',
  templateUrl: './page-shopping-cart.component.html',
  styleUrls: ['./page-shopping-cart.component.css']
})
export class PageShoppingCartComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[];
  wasOrderCreated: boolean;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.loadShoppingCart();
  }

  loadShoppingCart() {
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
    this.wasOrderCreated = false;
  }

  checkoutOrder(): void {
    this.shoppingCartService.placeOrder().subscribe(() => this.shoppingCartService.clearShoppingCart());
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
