import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
listCoupons: Coupon[];
inputCoupon: Coupon;


  constructor(private couponService:CouponService) { }

  ngOnInit(): void {
    this.inputCoupon = new Coupon();
    this.couponService.getCouponList().subscribe(
      (data: Coupon[])=>this.listCoupons =data
    );
  }

  save(coupon: Coupon): void {

   let i = this.listCoupons.indexOf(coupon);
   this.couponService.addCoupon(coupon).subscribe(() => this.listCoupons.push(coupon));
   swal("Success!", "Product added!", "success");
  /*   coupon.idCoupon=11;

    if (i != -1) {*/
      /*this.couponService.addCoupon(coupon).subscribe(() => this.listCoupons[i] = coupon);
      swal("Success!", "Product added!", "success");*/
      
   /* }
   // else {

      this.couponService.addCoupon(coupon).subscribe(() => this.listCoupons.push(coupon));
      swal("Success!", "Product added!", "success");
     
   // }*/
  
  }

}
