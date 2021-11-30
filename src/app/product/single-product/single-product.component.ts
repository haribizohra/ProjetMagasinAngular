import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product: product;
  @Output() deleteNotifEvent = new EventEmitter<product>();
  @Output() updateNotifEvent = new EventEmitter<product>();
  constructor() { }

  ngOnInit(): void {

  }


  deleteNotif() {
    this.deleteNotifEvent.emit(this.product)
  }
  updateNotif() {
    this.updateNotifEvent.emit(this.product)
  }

}
