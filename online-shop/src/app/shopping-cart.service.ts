import {Injectable} from '@angular/core';
import {Product} from './models/product';
import {ShoppingCartItem} from './models/shopping-cart-item';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderInput} from './models/order-input';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingCartItem[] = [];
  private ordersUrl = 'http://localhost:3000/orders';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getShoppingCartItems(): ShoppingCartItem[] {
    return this.shoppingCart;
  }


  placeOrder(): Observable<{}> {
    const order = new OrderInput();
    order.customer = 'doej';
    order.products = [];
    for (const item of this.shoppingCart) {
      order.products.push({productId: item.product.id, quantity: item.quantity});
    }
    this.shoppingCart = [];
    return this.http.post<OrderInput>(this.ordersUrl, order, this.httpOptions);
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

  modifyQuantity(productId: number, incrementedValue: number): void {
    const existingElement = this.shoppingCart.find(x => x.product.id === productId);
    if (existingElement) {
      existingElement.quantity += incrementedValue;
    }
  }
}
