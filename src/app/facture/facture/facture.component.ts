import { Component, OnInit } from '@angular/core';
import { DetailsFacture } from 'src/app/models/detailsFacture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  quantity: number =0;
  listDetailsFactures: DetailsFacture[];
  constructor() { }

  ngOnInit(): void {
    this.listDetailsFactures=[
      {
        idDetailFacture:1,
        quantite: 1,
        sousTotal: 1,
        pourcentageRemise: 10,
        montantRemise: 10,
        idProduit: 1,
        idFacture: 1,
      },
      {
        idDetailFacture:2,
        quantite: 1,
        sousTotal: 1,
        pourcentageRemise: 10,
        montantRemise: 10,
        idProduit: 1,
        idFacture: 1,
      }

    ];
  }
  IncrementQuantity(d:DetailsFacture): void{
    let i=this.listDetailsFactures.indexOf(d);
    if(this.listDetailsFactures[i].quantite<10)
    {this.listDetailsFactures[i].quantite++;}

    
  }
  decrementQuantity(d:DetailsFacture): void{
    let i=this.listDetailsFactures.indexOf(d);
    if(this.listDetailsFactures[i].quantite>0)
    {
      this.listDetailsFactures[i].quantite--;
    }
    
  }

  deleteDetailsFacture(d:DetailsFacture):void{
   
      let i = this.listDetailsFactures.indexOf(d);
      //this.listDetailsFactures.deleteProductService(d.id).subscribe(
        //()=>this.listProduct.splice(i,1)
      //)
      this.listDetailsFactures.splice(i,1);
    
  }
}
