import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { RayonComponent } from './rayon/rayon.component';
import { StockComponent } from './stock/stock.component';



@NgModule({
  declarations: [
    FournisseurComponent,
    RayonComponent,
    StockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FournisseurModule { }
