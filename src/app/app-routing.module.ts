import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur/fournisseur.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainProductComponent } from './product/main-product/main-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {path: 'products', component:MainProductComponent},
  {path: 'details/:id', component:ProductDetailsComponent},
  {path: 'products/details/:id', component:ProductDetailsComponent},
  {path: 'fournisseur', component:FournisseurComponent,
  {path: 'rayon', component:MainProductComponent},
  {path: 'stock', component:MainProductComponent},


  {path:'', component:MainProductComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
