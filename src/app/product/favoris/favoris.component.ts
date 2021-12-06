import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
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
          this.products.push(this.product);
            }
        }
      );
    
  }

  deleteFavoris(favoris: Favoris , product:product){
 //   console.log(this.listFavoris);
    let i = this.products.indexOf(product);
    console.log(this.listFavoris[i][0])
    console.log(i)
   // favoris.idFavoris=this.listFavoris[i][0];
      this.favorisService.deleteFavoris(favoris.idFavoris).subscribe(data => {
      this.listFavoris.splice(i, 1)
      });

  } 

}
