import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductDetailComponent} from './page-product-details/product-detail/product-detail.component';
import {ConfirmationModalComponent} from './page-product-details/confirmation-modal/confirmation-modal.component';
import {PageProductDetailsComponent} from './page-product-details/page-product-details.component';
import {PageProductListComponent} from './page-product-list/page-product-list.component';
import {ProductTableComponent} from './page-product-list/product-table/product-table.component';
import {PageShoppingCartComponent} from './page-shopping-cart/page-shopping-cart.component';
import {PageProductEditComponent} from './page-product-edit/page-product-edit.component';
import {PageProductAddComponent} from './page-product-add/page-product-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductFormComponent} from './product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    ConfirmationModalComponent,
    PageProductDetailsComponent,
    PageProductListComponent,
    ProductTableComponent,
    PageShoppingCartComponent,
    PageProductEditComponent,
    PageProductAddComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
