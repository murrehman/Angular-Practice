import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgProductsService {

  // url = 'https://ngproducts-154ed-default-rtdb.europe-west1.firebasedatabase.app/products.json'
  url = 'https://ngproducts1-a6043-default-rtdb.firebaseio.com//products.json'
  constructor(private http: HttpClient) {
  }

  saveProducts(products: any) {
    // return this.http.post(this.url, products)
    return this.http.put(this.url, products)
  }

  fetchProducts() {
    return this.http.get(this.url);

  }

  getDataTitle() {
    return this.http.get('https://ngproducts1-a6043-default-rtdb.firebaseio.com//dataTitle.json')
  }
}
