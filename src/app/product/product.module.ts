import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProductComponent } from './main-product/main-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MainProductComponent,
    SingleProductComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    MainProductComponent,
    SingleProductComponent,
    ProductDetailsComponent
  ]
})
export class ProductModule { }
