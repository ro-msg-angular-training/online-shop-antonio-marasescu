import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItem} from "../shopping-cart-item";
import {ShoppingCartService} from "../shopping-cart.service";

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
    this.shoppingCartService.modifyQuantity(productId, newQuantity);
  }

  loadShoppingCart() {
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
  }
}
