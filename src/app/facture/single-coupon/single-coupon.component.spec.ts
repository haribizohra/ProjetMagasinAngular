import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCouponComponent } from './single-coupon.component';

describe('SingleCouponComponent', () => {
  let component: SingleCouponComponent;
  let fixture: ComponentFixture<SingleCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
