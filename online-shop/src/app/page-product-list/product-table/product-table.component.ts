import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  @Input() dataList: Product[];
  private productListHeaders = ['category', 'name', 'price'];

  constructor() {
  }
}
