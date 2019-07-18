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
import {PageLoginComponent} from './page-login/page-login.component';
import {LoginFormComponent} from './page-login/login-form/login-form.component';
import {ShoppingCartTableComponent} from './page-shopping-cart/shopping-cart-table/shopping-cart-table.component';
import { BackgroundLoadingComponent } from './background-loading/background-loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ProductFormComponent,
    PageLoginComponent,
    LoginFormComponent,
    ShoppingCartTableComponent,
    BackgroundLoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
