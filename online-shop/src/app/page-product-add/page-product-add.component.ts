import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-product-add',
  templateUrl: './page-product-add.component.html',
  styleUrls: ['./page-product-add.component.css']
})
export class PageProductAddComponent {

  constructor(private productService: ProductService,
              private location: Location) {
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe(() => this.location.back());
  }
}
