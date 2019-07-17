import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PageProductDetailsComponent} from './page-product-details/page-product-details.component';
import {PageProductListComponent} from './page-product-list/page-product-list.component';
import {PageShoppingCartComponent} from './page-shopping-cart/page-shopping-cart.component';
import {PageProductEditComponent} from './page-product-edit/page-product-edit.component';
import {PageProductAddComponent} from './page-product-add/page-product-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: PageProductListComponent},
  {path: 'products/add', component: PageProductAddComponent},
  {path: 'products/:id', component: PageProductDetailsComponent},
  {path: 'products/:id/edit', component: PageProductEditComponent},
  {path: 'cart', component: PageShoppingCartComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
