import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCartItem} from '../../models/shopping-cart-item';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.css']
})
export class ShoppingCartTableComponent {
  @Input() shoppingCartItems: ShoppingCartItem[];
  @Output() increment: EventEmitter<any> = new EventEmitter();
  @Output() decrement: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  incrementQuantity(id: number) {
    this.increment.emit(id);
  }

  decrementQuantity(id: number) {
    this.decrement.emit(id);
  }

  removeItem(id: number) {
    this.remove.emit(id);
  }
}
