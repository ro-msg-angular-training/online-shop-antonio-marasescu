import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = 0;
    this.product = this.productService.getProduct(id);
  }

  delete(): void {
    alert('Are you sure?');
  }

  edit(): void {
    alert('Do nothing!');
  }
}
