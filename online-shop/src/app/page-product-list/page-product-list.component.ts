import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.css']
})
export class PageProductListComponent implements OnInit {
  @Input() products: Product[];

  constructor(private productService: ProductService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

}
