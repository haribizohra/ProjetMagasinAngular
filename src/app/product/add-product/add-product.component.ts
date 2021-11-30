import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  terms: Boolean = false;
  @Input() product: product;
  @Output() addEvent = new EventEmitter<product>();
  userFile: any;

  constructor() { }

  ngOnInit(): void {

  }

  save() {
    this.addEvent.emit(this.product);
    this.product = new product();
  }

  change() {
    if (this.terms == false) {
      this.terms = true;
    } else
      this.terms = false;
    console.log(this.terms);
  }

  onSelectFile(event:any) {
    if (event.target.files.length > 0) {
      var img = event.target.files[0].name;
      console.log(img);
      this.product.picture=img;
    }
  }




}
