import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

  gotoDetails(product: Product): void {
    alert('Route this!');
  }

  gotoCart(): void {
    alert('Go cart!');
  }

  gotoAdd(): void {
    alert('Go Add!');
  }
}
