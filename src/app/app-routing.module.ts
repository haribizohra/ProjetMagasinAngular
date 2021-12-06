import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavorisComponent } from './product/favoris/favoris.component';
import { MainProductComponent } from './product/main-product/main-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {path: 'products', component:MainProductComponent},
  {path: 'details/:id', component:ProductDetailsComponent},
  {path: 'products/details/:id', component:ProductDetailsComponent},
  {path: 'favoris', component:FavorisComponent},
  {path:'', component:MainProductComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
