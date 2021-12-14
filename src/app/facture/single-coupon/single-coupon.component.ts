import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-single-coupon',
  templateUrl: './single-coupon.component.html',
  styleUrls: ['./single-coupon.component.css']
})
export class SingleCouponComponent implements OnInit {
  @Input()c: Coupon;
  constructor() { }

  ngOnInit(): void {
  }

}
