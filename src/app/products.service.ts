// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://pwa.dmoscarella.com:4000/products';

  constructor(private http: HttpClient, private router: Router) { }

   addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
        this.router.navigate(['products'])
  }
  
   getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
	
	updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
}
  
  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
