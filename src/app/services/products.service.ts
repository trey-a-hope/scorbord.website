import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from '../models/stripe/product';

declare var require: any

@Injectable()
export class ProductsService {

  headers: Headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
  apiKey: String = 'sk_live_o2l20PHfOYXaQCsAFPVdaNeC';
  localProductsJsonUrl: string = 'http://localhost:4200/assets/mock-data/products.json';
  remoteProductsJsonUrl: string = 'http://tr3designs.tr3umphant-designs.com/assets/mock-data/products.json';

  constructor(private http: Http) { }

  private extractProductData(json: JSON): Product {
    var product = new Product();

    product.id = json['id'];
    product.name = json['name'];
    product.caption = json['caption'];
    product.updated = new Date(json['updated'] * 1000);
    product.imageUrls = json['images'];
    product.created = new Date(json['created'] * 1000);
    product.price = json['skus']['data'][0]['price'];

    return product;
  }

  public testGetProducts(): Observable<Array<Product>> {
    return this.http.get(this.remoteProductsJsonUrl).map((res: Response) => {
      let json = res.json();
      var products: Product[] = new Array<Product>();

      for(var i = 0; i < json['data'].length; i++){
        products.push(this.extractProductData(json['data'][i]));
      }

      return products;
    });
  }

  //Return all products.
  public getProducts(): Observable<any> {
    let url: string = `http://es.tr3umphant-designs.com/assets/stripe/products/listAllProducts.php`;
    return this.http.post(url, {'apiKey': this.apiKey},this.options)
      .map((res: Response)=>{
        let json = res.json();
        var products: Product[] = new Array<Product>();

        for(var i = 0; i < json['data'].length; i++){
          products.push(this.extractProductData(json['data'][i]));
        }

        return products;
      })
      .catch((error: Response | any) => {
          return Observable.throw(error.message || error);
      }); 
  }


}
