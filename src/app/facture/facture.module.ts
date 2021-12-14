import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFactureComponent } from './details-facture/details-facture.component';
import { FactureComponent } from './facture/facture.component';
import { CouponComponent } from './coupon/coupon.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { SingleCouponComponent } from './single-coupon/single-coupon.component';




@NgModule({
  declarations: [
    DetailsFactureComponent,
    FactureComponent,
    CouponComponent,
    AddCouponComponent,
    SingleCouponComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    DetailsFactureComponent,
    FactureComponent,
    CouponComponent
  ]
})
export class FactureModule { }
