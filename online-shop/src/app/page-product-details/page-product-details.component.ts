import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {AuthService} from '../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {selectCurrentProduct} from '../store/selectors/product.selectors';
import {GetProduct, RemoveProduct} from '../store/actions/product.actions';

@Component({
  selector: 'app-page-product-details',
  templateUrl: './page-product-details.component.html',
  styleUrls: ['./page-product-details.component.css']
})
export class PageProductDetailsComponent implements OnInit {
  product$: Observable<Product>;
  actualProduct: Product;
  wasAddedToTheCart: boolean;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.product$ = this.store.select(selectCurrentProduct);
    this.wasAddedToTheCart = false;
    this.getProduct();
  }

  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.store.dispatch(new GetProduct(id));
    this.product$.subscribe(product => this.actualProduct = product);
  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: this.actualProduct.name
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(new RemoveProduct(this.actualProduct.id));
      }
    });
  }

  addToCart(): void {
    this.shoppingCartService.addItem(this.actualProduct);
    this.wasAddedToTheCart = true;
  }

}
