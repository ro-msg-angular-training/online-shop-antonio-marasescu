import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-page-product-details',
  templateUrl: './page-product-details.component.html',
  styleUrls: ['./page-product-details.component.css']
})
export class PageProductDetailsComponent implements OnInit {

  @Input() product: Product;
  private wasAddedToTheCart: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.wasAddedToTheCart = false;
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  delete(): void {
    this.shoppingCartService.removeItem(this.product.id);
    this.productService.removeProduct(this.product.id).subscribe(() => this.router.navigateByUrl('/products'));
  }

  addToCart(): void {
    this.shoppingCartService.addItem(this.product);
    this.wasAddedToTheCart = true;
  }

}
