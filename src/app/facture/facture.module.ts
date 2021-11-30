import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFactureComponent } from './details-facture/details-facture.component';
import { FactureComponent } from './facture/facture.component';
import { CouponComponent } from './coupon/coupon.component';



@NgModule({
  declarations: [
    DetailsFactureComponent,
    FactureComponent,
    CouponComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FactureModule { }
