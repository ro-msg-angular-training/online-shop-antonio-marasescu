import {Injectable} from '@angular/core';
import {Product} from './product';
import {ShoppingCartItem} from './shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingCartItem[] = [];
  private ordersUrl = 'http://localhost:3000/orders';

  constructor() {
  }

  getShoppingCartItems(): ShoppingCartItem[] {
    return this.shoppingCart;
  }

  placeOrder(): void {
    this.shoppingCart = [];
  }

  addItem(product: Product): void {
    const shoppingCartItem = new ShoppingCartItem();
    shoppingCartItem.product = product;
    shoppingCartItem.quantity = 1;
    const existingElement = this.shoppingCart.find(x => x.product.id === product.id);
    if (existingElement) {
      existingElement.quantity += 1;
    } else {
      this.shoppingCart = this.shoppingCart.concat([shoppingCartItem]);
    }
  }

  removeItem(productId: number): void {
    this.shoppingCart = this.shoppingCart.filter(x => x.product.id !== productId);
  }

  modifyQuantity(productId: number, newQuantity: number): void {
    const existingElement = this.shoppingCart.find(x => x.product.id === productId);
    if (existingElement) {
      existingElement.quantity = newQuantity;
    }
  }
}
