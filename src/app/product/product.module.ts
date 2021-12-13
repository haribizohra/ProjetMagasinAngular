import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProductComponent } from './main-product/main-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { FavorisComponent } from './favoris/favoris.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    MainProductComponent,
    SingleProductComponent,
    AddProductComponent,
    ProductDetailsComponent,
    FavorisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    MainProductComponent,
    SingleProductComponent,
    ProductDetailsComponent
  ]
})
export class ProductModule { }
