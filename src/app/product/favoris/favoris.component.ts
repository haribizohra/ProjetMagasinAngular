import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { observable } from 'rxjs';
import { Favoris } from 'src/app/models/favoris';
import { product } from 'src/app/models/product';
import { FavorisService } from 'src/app/services/favoris.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  listFavoris: any[];
  product: product;
  products: product[];
  favoris: Favoris = new Favoris();

  constructor(private favorisService: FavorisService) { }

  ngOnInit(): void {
    this.products=[];
    this.getFavoris();
  }

  getFavoris() {
 
      this.favorisService.getFavList(2).subscribe(
        (data: any) => {
            for (let i = 0; i <data.length; i++) {
          this.product = new product();
          this.listFavoris = data;
          this.product.libelle = data[i][4];
          this.product.categorieProduit = data[i][2];
          this.product.code = data[i][3];
          this.product.prixUnitaire = data[i][5];
          this.product.picture = data[i][6];
          this.product.dateCreation = data[i][7];
          this.product.idProduit = data[i][1];
          this.products.push(this.product);
            }
        }
      );
    
  }

  deleteFavoris(favoris: Favoris , product:product){
    let i = this.products.indexOf(product);
      favoris.idFavoris=this.listFavoris[i][0];
      this.favorisService.deleteFavoris(favoris.idFavoris).subscribe(data => {
      this.listFavoris.splice(i, 1);
      this.products.splice(i,1);
      });
  } 

}
