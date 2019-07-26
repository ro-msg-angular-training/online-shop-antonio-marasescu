import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PageProductDetailsComponent} from './page-product-details/page-product-details.component';
import {PageProductListComponent} from './page-product-list/page-product-list.component';
import {PageShoppingCartComponent} from './page-shopping-cart/page-shopping-cart.component';
import {PageProductEditComponent} from './page-product-edit/page-product-edit.component';
import {PageProductAddComponent} from './page-product-add/page-product-add.component';
import {PageLoginComponent} from './page-login/page-login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent},
  {path: 'products', component: PageProductListComponent, canActivate: [AuthGuard]},
  {path: 'products/add', component: PageProductAddComponent, data: {roles: 'admin'}, canActivate: [AuthGuard]},
  {path: 'products/:id', component: PageProductDetailsComponent, canActivate: [AuthGuard]},
  {path: 'products/:id/edit', component: PageProductEditComponent, data: {roles: 'admin'}, canActivate: [AuthGuard]},
  {path: 'cart', component: PageShoppingCartComponent, data: {roles: 'customer'}, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
