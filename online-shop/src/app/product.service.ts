import {Injectable} from '@angular/core';
import {Product} from './product'
import {productsMockup} from './products-mockup';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getAllProducts(): Product[] {
    return productsMockup;
  }

  getProduct(id: number): Product {
    return productsMockup.filter(x => x.id === id)[0];
  }
}
