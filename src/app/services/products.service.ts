import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from '../models/stripe/product';

@Injectable()
export class ProductsService {

  headers: Headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
  apiKey: String = 'sk_live_o2l20PHfOYXaQCsAFPVdaNeC';

  constructor(private http: Http) { }

  private extractProductData(json: JSON): Product {
    var product = new Product();

    product.id = json['id'];
    product.name = json['name'];
    product.caption = json['caption'];
    product.imageUrls = json['images'];
    product.created = new Date(json['created'] * 1000);

    return product;
  }

  public testGetProducts(): Observable<Array<Product>> {
    var data = { "object": "list", "data": [ { "id": "prod_Cw25JrcmZaPtKL", "object": "product", "active": true, "attributes": [], "caption": "Six sided, spiraling ashtray.", "created": 1527370428, "deactivate_on": [], "description": "Six sided, spiraling ashtray with enough extrusion to hold all of those pesky ashes.", "images": [ "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/102213689880b826ac064090d3d82dce\/5B9FBB32\/t51.2885-15\/e35\/32400770_140878400115340_7610071639169957888_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/b0c85443cbd184f46b6f2fd511bcb0d5\/5B9DAECD\/t51.2885-15\/e35\/32346770_443791972747364_1567861314435416064_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/0db8d85cfa35ec3d794f60357ce05299\/5BA75EB5\/t51.2885-15\/e35\/33370198_1834159030220129_5364033047370924032_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/8c4f5d185b151912742676ee71a5d3c0\/5B8D386D\/t51.2885-15\/e35\/33559692_377240269438580_2774478942558486528_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/46740d146996360cc8e2f300c6a400f0\/5B88D428\/t51.2885-15\/e35\/32443689_2094170200854952_1556426526650531840_n.jpg" ], "livemode": true, "metadata": { "colorStatus": "1" }, "name": "Spiral Ashtray", "package_dimensions": { "height": 1, "length": 4.3, "weight": 3, "width": 4.3 }, "shippable": true, "skus": { "object": "list", "data": [ { "id": "sku_Cw26y52EefAAkK", "object": "sku", "active": true, "attributes": [], "created": 1527370469, "currency": "usd", "image": "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/102213689880b826ac064090d3d82dce\/5B9FBB32\/t51.2885-15\/e35\/32400770_140878400115340_7610071639169957888_n.jpg", "inventory": { "quantity": null, "type": "infinite", "value": null }, "livemode": true, "metadata": [], "package_dimensions": { "height": 1, "length": 4.3, "weight": 3, "width": 4.3 }, "price": 599, "product": "prod_Cw25JrcmZaPtKL", "updated": 1527370861 } ], "has_more": false, "total_count": 1, "url": "\/v1\/skus?product=prod_Cw25JrcmZaPtKL&active=true" }, "type": "good", "updated": 1527370892, "url": null }, { "id": "prod_CuUUxLqmNXRybC", "object": "product", "active": true, "attributes": [], "caption": "Six sided, spiraling vase.", "created": 1527014827, "deactivate_on": [], "description": "Six sided, spiraling vase. Smooth curves and deep extrusion.", "images": [ "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/2bed25ca1ed9e21feaae58d829847814\/5B8149FB\/t51.2885-15\/e35\/32070134_366752667145429_1448799237532811264_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/c43f4a6969dc8da216bd772329a0de07\/5B891DCE\/t51.2885-15\/e35\/32247465_128780361243232_514916271838461952_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/2da7a134d9ad3be372063f6093605496\/5BC0ADCB\/t51.2885-15\/e35\/32224941_372301903279989_6294363752988934144_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/280f1313c259dc4d0376510409f8732c\/5B8C8022\/t51.2885-15\/e35\/32203272_207001453247401_3687478604733612032_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/474bf9c8a2b6602c7369bee9717081df\/5B82D9C5\/t51.2885-15\/e35\/31849627_1444669212305253_6784179303941668864_n.jpg" ], "livemode": true, "metadata": { "colorStatus": "1" }, "name": "Spiral Vase", "package_dimensions": { "height": 4, "length": 3.3, "weight": 0, "width": 3.3 }, "shippable": true, "skus": { "object": "list", "data": [ { "id": "sku_CuUVFmRF15vP26", "object": "sku", "active": true, "attributes": [], "created": 1527014877, "currency": "usd", "image": "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/2bed25ca1ed9e21feaae58d829847814\/5B8149FB\/t51.2885-15\/e35\/32070134_366752667145429_1448799237532811264_n.jpg", "inventory": { "quantity": null, "type": "infinite", "value": null }, "livemode": true, "metadata": [], "package_dimensions": { "height": 4, "length": 3.3, "weight": 0, "width": 3.3 }, "price": 699, "product": "prod_CuUUxLqmNXRybC", "updated": 1527258893 } ], "has_more": false, "total_count": 1, "url": "\/v1\/skus?product=prod_CuUUxLqmNXRybC&active=true" }, "type": "good", "updated": 1527370852, "url": null } ], "has_more": false, "url": "\/v1\/products" };
    return this.http.put('https://api.myjson.com/bins/584d5', data)
      .map((res: Response) => {
        let json = res.json();
        var products: Product[] = new Array<Product>();

        for(var i = 0; i < json['data'].length; i++){
          products.push(this.extractProductData(json['data'][i]));
        }

        console.log(products);

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
