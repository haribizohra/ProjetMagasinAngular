import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Favoris } from '../models/favoris';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private baseUrl=environment.url+"favoris";

  constructor(private HttpClient : HttpClient) { }

  getFavList(idUser:number) {
    return this.HttpClient.get<product[]>(this.baseUrl+'/display/'+idUser);
  }

  addFavoris(favoris:Favoris,idProduct: number,idUser: number){
    return this.HttpClient.post<Favoris>(this.baseUrl+'/add/'+idProduct+'/'+idUser,favoris);
  }

  deleteFavoris(idFavoris: number){
    return this.HttpClient.delete(this.baseUrl+'/delete/'+idFavoris);
  }

  findFav(idProduct: number,idUser: number){
    
    return this.HttpClient.get(this.baseUrl+'/findFav/'+idProduct+"/"+idUser);
  }



}
