import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl=environment.url+"produit";


  constructor(private HttpClient : HttpClient) { }

  getProductList() {
   
    return this.HttpClient.get<product[]>(this.baseUrl+'/display');
  }

  addProduct(product:product){
    return this.HttpClient.post(this.baseUrl+'/add',product);
  }

  updateProduct(product:product){
    return this.HttpClient.put(this.baseUrl+'/update',product);

  }

  deleteProduct(idProduct: number){
    return this.HttpClient.delete(this.baseUrl+'/delete/'+idProduct);
  }

  findProduct(idProduct: number){
    return this.HttpClient.get(this.baseUrl+'/retrive/'+idProduct);
  }
}
