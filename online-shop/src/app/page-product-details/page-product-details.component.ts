import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {AuthService} from '../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-page-product-details',
  templateUrl: './page-product-details.component.html',
  styleUrls: ['./page-product-details.component.css']
})
export class PageProductDetailsComponent implements OnInit {

  @Input() product: Product;
  wasAddedToTheCart: boolean;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.wasAddedToTheCart = false;
    this.getProduct();
  }

  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: this.product.name
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.shoppingCartService.removeItem(this.product.id);
        this.productService.removeProduct(this.product.id).subscribe(() => this.router.navigateByUrl('/products'));
      }
    });
  }

  addToCart(): void {
    this.shoppingCartService.addItem(this.product);
    this.wasAddedToTheCart = true;
  }

}
