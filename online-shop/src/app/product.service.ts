import {Injectable} from '@angular/core';
import {Product} from './product'
import {productsMockup} from './products-mockup';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getAllProducts(): Observable<Product[]> {
    return of(productsMockup);
  }

  getProduct(id: number): Observable<Product> {
    return of(productsMockup.find(x => x.id === id));
  }
}
