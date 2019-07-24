import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderInput} from '../models/order-input';
import {AppConfig} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: Map<number, ShoppingCartItem> = new Map<number, ShoppingCartItem>();
  private ordersUrl = AppConfig.API_ENDPOINT + '/orders';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getShoppingCartItems(): ShoppingCartItem[] {
    return Array.from(this.shoppingCart.values());
  }

  clearShoppingCart() {
    this.shoppingCart.clear();
  }

  placeOrder(user): Observable<{}> {
    const order = new OrderInput();
    order.customer = user.username;
    order.products = this.getShoppingCartItems().map((item) => ({productId: item.product.id, quantity: item.quantity}));
    return this.http.post<OrderInput>(this.ordersUrl, order, this.httpOptions);
  }

  addItem(product: Product): void {
    const shoppingCartItem = new ShoppingCartItem();
    shoppingCartItem.product = product;
    shoppingCartItem.quantity = 1;
    this.shoppingCart.set(product.id, shoppingCartItem);
  }

  removeItem(productId: number): void {
    this.shoppingCart.delete(productId);
  }

  modifyQuantity(productId: number, incrementedValue: number): void {
    const existingElement = this.shoppingCart.get(productId);
    if (existingElement) {
      existingElement.quantity += incrementedValue;
    }
  }
}
