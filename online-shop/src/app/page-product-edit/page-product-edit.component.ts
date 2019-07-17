import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../models/product';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-product-edit',
  templateUrl: './page-product-edit.component.html',
  styleUrls: ['./page-product-edit.component.css']
})
export class PageProductEditComponent implements OnInit {
  @Input() product: Product;
  private productId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private location: Location) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe(product => this.product = product);
  }

  editProduct(editedProduct: Product) {
    this.productService.editProduct(this.productId, editedProduct).subscribe(() => this.location.back());
  }
}
