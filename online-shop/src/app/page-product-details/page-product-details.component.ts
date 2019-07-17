import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-page-product-details',
  templateUrl: './page-product-details.component.html',
  styleUrls: ['./page-product-details.component.css']
})
export class PageProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  delete(): void {
    this.productService.removeProduct(this.product.id).subscribe(() => this.router.navigateByUrl('/products'));
  }

  edit(): void {
    alert('Do nothing!....Yet');
  }

  addToCart(): void {
    this.shoppingCartService.addItem(this.product);
  }

}
