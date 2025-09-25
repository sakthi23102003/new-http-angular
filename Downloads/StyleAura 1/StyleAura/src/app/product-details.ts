import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OurproductsComponent } from './ourproducts/ourproducts';
import { Product } from './ourproducts/ourproducts.model';
import { ProductResponse } from './ourproducts/ourproducts.model';
@Injectable({
  providedIn: 'root'
})
  
export class ProductDetails {
  private apiurl = 'https://dummyjson.com/products';
  constructor(private pdservice : HttpClient) {}
 
  getProducts(): Observable<ProductResponse> {
    return this.pdservice.get<ProductResponse>(this.apiurl);
  }
  getProductss(): Observable<ProductResponse> {
    return this.pdservice.get<ProductResponse>(this.apiurl);
  }
}