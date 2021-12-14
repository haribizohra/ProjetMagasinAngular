import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private baseUrl=environment.url+"coupon";

  constructor(private HttpClient : HttpClient) { }


  getCouponList() {
   
    return this.HttpClient.get<Coupon[]>(this.baseUrl+'retrieve-all-coupons');
  }

  addCoupon(coupon:Coupon){
    return this.HttpClient.post(this.baseUrl+'add-coupon',coupon);
  }

  updateCoupon(coupon:Coupon){
    return this.HttpClient.put(this.baseUrl+'modify-coupon',coupon);

  }

  deleteCoupon(idCoupon: number){
    return this.HttpClient.delete(this.baseUrl+'remove-coupon/'+idCoupon);
  }

  findCoupon(idCoupon: number){
    return this.HttpClient.get(this.baseUrl+'retrieve-coupon/'+idCoupon);
  }

  generateCoupon(){
    return this.HttpClient.get(this.baseUrl+'generate-coupon');
  }
}
