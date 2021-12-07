import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailsFacture } from 'src/app/models/detailsFacture';

@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrls: ['./details-facture.component.css']
})
export class DetailsFactureComponent implements OnInit {
@Input()
dfac: DetailsFacture;
@Output() incrementQuantityEvent = new EventEmitter<DetailsFacture>();
@Output() decrementQuantityEvent = new EventEmitter<DetailsFacture>();
@Output() deletedfEvent = new EventEmitter<DetailsFacture>();
  constructor() { }

  ngOnInit(): void {
  }
  incrementNotif(){
this.incrementQuantityEvent.emit(this.dfac);
  }
  deleteNotif(){
    this.deletedfEvent.emit(this.dfac);
      }
  decrementNotif(){
    this.decrementQuantityEvent.emit(this.dfac);
      }

}
