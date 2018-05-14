import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductsService {

  headers: Headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option

  constructor(private http: Http) { }

  //Return all products.
  public getProducts(): Observable<any> {
    let url: string = `http://es.tr3umphant-designs.com/assets/stripe/products/listAllProducts.php`;
    return this.http.post(url, {'apiKey': 'sk_test_IM9ti8gurtw7BjCPCtm9hRar'},this.options)
      .map((res: Response)=>{
        let body = res.json();
        return body.items || {};
      })
      .catch((error: Response | any) => {
          return Observable.throw(error.message || error);
      }); 
  }


}
