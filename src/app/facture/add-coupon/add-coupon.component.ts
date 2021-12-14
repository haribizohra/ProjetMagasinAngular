import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { CouponComponent } from '../coupon/coupon.component';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  @Input()coupon: Coupon;
  @Output() addEvent=new EventEmitter<Coupon>();
 
  constructor( private _router: Router) { }

  ngOnInit(): void {
 
  }
  saveNotif()
  {
    /*this.couponService.addCoupon(this.coupon).subscribe(
      ()=>this._router.navigate(["coupon"])
    );*/
    this.addEvent.emit(this.coupon);
    this.coupon = new Coupon();
  }

}
