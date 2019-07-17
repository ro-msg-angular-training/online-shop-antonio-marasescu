import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-page-shopping-cart',
  templateUrl: './page-shopping-cart.component.html',
  styleUrls: ['./page-shopping-cart.component.css']
})
export class PageShoppingCartComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.loadShoppingCart();
  }

  changeQuantity(productId: number, newQuantity: number): void {

  }

  loadShoppingCart() {
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
  }

  checkoutOrder(): void {
    this.shoppingCartService.placeOrder().subscribe();
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
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
