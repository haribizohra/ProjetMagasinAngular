import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './facture/coupon/coupon.component';
import { FactureComponent } from './facture/facture/facture.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainProductComponent } from './product/main-product/main-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {path: 'products', component:MainProductComponent},
  {path: 'details/:id', component:ProductDetailsComponent},
  {path: 'products/details/:id', component:ProductDetailsComponent},
  {path: 'facture', component:FactureComponent},
  {path:'', component:MainProductComponent},
  {path: 'coupon', component:CouponComponent},
  {path:'**', component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
