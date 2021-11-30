import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  quantity: number =0;
  constructor() { }

  ngOnInit(): void {
  }
  IncrementQuantity(): void{
    this.quantity ++;
    
  }
  decrementQuantity(): void{
    if(this.quantity>0)
    {
      this.quantity --;
    }
    
  }
}
