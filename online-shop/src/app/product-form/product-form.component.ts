import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() submitProductData: EventEmitter<any> = new EventEmitter();

  private productForm = this.formBuilder.group({
    productName: new FormControl('', [
      Validators.required
    ]),
    productCategory: new FormControl('', [
      Validators.required
    ]),
    productImageLink: new FormControl('', [
      Validators.required
    ]),
    productPrice: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+')
    ]),
    productDescription: ['']
  });

  get productName() {
    return this.productForm.get('productName');
  }

  get productCategory() {
    return this.productForm.get('productCategory');
  }

  get productImageLink() {
    return this.productForm.get('productImageLink');
  }

  get productPrice() {
    return this.productForm.get('productPrice');
  }

  get productDescription() {
    return this.productForm.get('productDescription');
  }

  constructor(private formBuilder: FormBuilder,
              private location: Location) {
  }

  ngOnInit() {
    if (this.product) {
      this.updateFormState(this.product);
    }
  }

  updateFormState(product: Product) {
    this.productName.setValue(this.product.name);
    this.productCategory.setValue(this.product.category);
    this.productImageLink.setValue(this.product.image);
    this.productPrice.setValue(this.product.price);
    this.productDescription.setValue(this.product.description);
  }

  submitFormData(): void {
    const newProduct = new Product();
    newProduct.name = this.productName.value;
    newProduct.category = this.productCategory.value;
    newProduct.image = this.productImageLink.value;
    newProduct.price = this.productPrice.value;
    newProduct.description = this.productDescription.value;
    this.submitProductData.emit(newProduct);
  }

  goBack() {
    this.location.back();
  }
}
