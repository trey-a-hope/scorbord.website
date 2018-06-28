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
    var data = { "object": "list", "data": [ { "id": "prod_D41kQUvrv9T5ZS", "object": "product", "active": true, "attributes": [], "caption": "Custom text name stand.", "created": 1529214266, "deactivate_on": [], "description": "Get any text you want, with your choice of font, styled on to a supported stand, (I will discuss details via email).", "images": [ "https:\/\/scontent-iad3-1.cdninstagram.com\/vp\/0c44c6c8424f60e6bc39de993f86028b\/5BAFC6DC\/t51.2885-15\/e35\/34495868_178449366331566_1266165979587543040_n.jpg", "https:\/\/scontent-iad3-1.cdninstagram.com\/vp\/9f49470bb69fbe38314df7162e64e322\/5BBB484F\/t51.2885-15\/e35\/34776522_1863866720579189_1488088975586361344_n.jpg", "https:\/\/scontent-iad3-1.cdninstagram.com\/vp\/b4fc231fee56839a16cd3c44b89d4dc7\/5BB0EEDF\/t51.2885-15\/e35\/35534231_410801019399817_6914247079921451008_n.jpg", "https:\/\/scontent-iad3-1.cdninstagram.com\/vp\/4cb895e76b6460bbad36c2764afea2c9\/5BBDD8D6\/t51.2885-15\/e35\/34838696_640989682917474_9148231163104460800_n.jpg", "https:\/\/scontent-iad3-1.cdninstagram.com\/vp\/059802f2c4d388ab76dfbd26342e4c0f\/5BA4D885\/t51.2885-15\/e35\/34518470_2176394652387544_9031038951753777152_n.jpg" ], "livemode": true, "metadata": { "colorStatus": "1" }, "name": "Name Stand", "package_dimensions": { "height": 0.46, "length": 1.9, "weight": 3, "width": 7.08 }, "shippable": true, "skus": { "object": "list", "data": [ { "id": "sku_D41kEausBY3CO9", "object": "sku", "active": true, "attributes": [], "created": 1529214312, "currency": "usd", "image": "https:\/\/scontent-iad3-1.cdninstagram.com\/vp\/0c44c6c8424f60e6bc39de993f86028b\/5BAFC6DC\/t51.2885-15\/e35\/34495868_178449366331566_1266165979587543040_n.jpg", "inventory": { "quantity": null, "type": "infinite", "value": null }, "livemode": true, "metadata": [], "package_dimensions": { "height": 0.46, "length": 1.9, "weight": 3, "width": 7.08 }, "price": 1299, "product": "prod_D41kQUvrv9T5ZS", "updated": 1529215930 } ], "has_more": false, "total_count": 1, "url": "\/v1\/skus?product=prod_D41kQUvrv9T5ZS&active=true" }, "type": "good", "updated": 1529216597, "url": null }, { "id": "prod_CykJemr03G29j3", "object": "product", "active": true, "attributes": [], "caption": "Medieval themed vase.", "created": 1527996251, "deactivate_on": [], "description": "Medieval themed vase with double indent extrusion and eight pointed caves.", "images": [ "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/5563d6f1326ef99365de8019f66f4023\/5BA4BCC0\/t51.2885-15\/e35\/32359085_338459750014810_295360829316923392_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/0edbc822da2155b43206422e88e31917\/5BACAAD0\/t51.2885-15\/e35\/33177992_426158024461921_174576706751823872_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/e239f9889ea5cfc6537df93b55f13c87\/5BAC02CA\/t51.2885-15\/e35\/34037343_1851311401830159_495841171025690624_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/690147176d6cace7b910dd9499067ad5\/5BC20E5D\/t51.2885-15\/e35\/33852289_210177996259510_299537719372021760_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/97b70d94f06c005ed79d37e634635de1\/5B9EF711\/t51.2885-15\/e35\/32910805_238652346894678_2954579930735706112_n.jpg" ], "livemode": true, "metadata": { "colorStatus": "1" }, "name": "Goblet Vase", "package_dimensions": { "height": 5.4, "length": 4.3, "weight": 4, "width": 4.3 }, "shippable": true, "skus": { "object": "list", "data": [ { "id": "sku_CykKN4PBAe8yvk", "object": "sku", "active": true, "attributes": [], "created": 1527996295, "currency": "usd", "image": "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/0edbc822da2155b43206422e88e31917\/5BACAAD0\/t51.2885-15\/e35\/33177992_426158024461921_174576706751823872_n.jpg", "inventory": { "quantity": null, "type": "infinite", "value": null }, "livemode": true, "metadata": [], "package_dimensions": { "height": 5.4, "length": 4.3, "weight": 4, "width": 4.3 }, "price": 1499, "product": "prod_CykJemr03G29j3", "updated": 1528319035 } ], "has_more": false, "total_count": 1, "url": "\/v1\/skus?product=prod_CykJemr03G29j3&active=true" }, "type": "good", "updated": 1528318999, "url": null }, { "id": "prod_CxndXRLN26ppkP", "object": "product", "active": true, "attributes": [], "caption": "Vibrant, hollowed sphere.", "created": 1527777940, "deactivate_on": [], "description": "Vibrant, hollowed sphere with hexagon and pentagon faces on the exterior. Can be used as a container or simply for design.", "images": [ "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/bfa740d2b26ae4aa6de2021eb6470c65\/5BA57271\/t51.2885-15\/e35\/33037875_1827962480597282_6045680739914088448_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/cf5635715173b8155ea55bfa37581db7\/5BC1E7F5\/t51.2885-15\/e35\/32694356_1887290288229860_6981752781719732224_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/d2e76b6e2a835133e6cf21c2fae5fbae\/5BA01389\/t51.2885-15\/e35\/32385129_219520675502577_1672483672634163200_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/3e225570140145c23311ace00cbe6b9d\/5BA3ED8F\/t51.2885-15\/e35\/32400765_2094043887533574_2224589950324572160_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/99085ca4433d95e4cf5ed4eb3eeaccd5\/5BB5E0F3\/t51.2885-15\/e35\/33101062_1637531576344382_1313514034066096128_n.jpg" ], "livemode": true, "metadata": { "colorStatus": "1" }, "name": "Hexa-Penta-Gon", "package_dimensions": { "height": 4.3, "length": 4.3, "weight": 4, "width": 4.3 }, "shippable": true, "skus": { "object": "list", "data": [ { "id": "sku_Cxnd795jnE6iAs", "object": "sku", "active": true, "attributes": [], "created": 1527777972, "currency": "usd", "image": "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/bfa740d2b26ae4aa6de2021eb6470c65\/5BA57271\/t51.2885-15\/e35\/33037875_1827962480597282_6045680739914088448_n.jpg", "inventory": { "quantity": null, "type": "infinite", "value": null }, "livemode": true, "metadata": [], "package_dimensions": { "height": 4.3, "length": 4.3, "weight": 4, "width": 4.3 }, "price": 999, "product": "prod_CxndXRLN26ppkP", "updated": 1527897172 } ], "has_more": false, "total_count": 1, "url": "\/v1\/skus?product=prod_CxndXRLN26ppkP&active=true" }, "type": "good", "updated": 1528140917, "url": null }, { "id": "prod_Cw25JrcmZaPtKL", "object": "product", "active": true, "attributes": [], "caption": "Six sided, spiraling ashtray.", "created": 1527370428, "deactivate_on": [], "description": "Six sided, spiraling ashtray with enough extrusion to hold all of those pesky ashes. You can also get text or visuals imprinted in the center.", "images": [ "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/102213689880b826ac064090d3d82dce\/5B9FBB32\/t51.2885-15\/e35\/32400770_140878400115340_7610071639169957888_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/b0c85443cbd184f46b6f2fd511bcb0d5\/5B9DAECD\/t51.2885-15\/e35\/32346770_443791972747364_1567861314435416064_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/0db8d85cfa35ec3d794f60357ce05299\/5BA75EB5\/t51.2885-15\/e35\/33370198_1834159030220129_5364033047370924032_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/8c4f5d185b151912742676ee71a5d3c0\/5B8D386D\/t51.2885-15\/e35\/33559692_377240269438580_2774478942558486528_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/46740d146996360cc8e2f300c6a400f0\/5B88D428\/t51.2885-15\/e35\/32443689_2094170200854952_1556426526650531840_n.jpg" ], "livemode": true, "metadata": { "colorStatus": "1" }, "name": "Spiral Ash(trey)", "package_dimensions": { "height": 1, "length": 4.3, "weight": 3, "width": 4.3 }, "shippable": true, "skus": { "object": "list", "data": [ { "id": "sku_Cw26y52EefAAkK", "object": "sku", "active": true, "attributes": [], "created": 1527370469, "currency": "usd", "image": "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/102213689880b826ac064090d3d82dce\/5B9FBB32\/t51.2885-15\/e35\/32400770_140878400115340_7610071639169957888_n.jpg", "inventory": { "quantity": null, "type": "infinite", "value": null }, "livemode": true, "metadata": [], "package_dimensions": { "height": 1, "length": 4.3, "weight": 3, "width": 4.3 }, "price": 999, "product": "prod_Cw25JrcmZaPtKL", "updated": 1529637066 } ], "has_more": false, "total_count": 1, "url": "\/v1\/skus?product=prod_Cw25JrcmZaPtKL&active=true" }, "type": "good", "updated": 1530125791, "url": null }, { "id": "prod_CuUUxLqmNXRybC", "object": "product", "active": true, "attributes": [], "caption": "Six sided, spiraling vase.", "created": 1527014827, "deactivate_on": [], "description": "Six sided, spiraling vase. Smooth curves and deep extrusion.", "images": [ "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/2bed25ca1ed9e21feaae58d829847814\/5B8149FB\/t51.2885-15\/e35\/32070134_366752667145429_1448799237532811264_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/c43f4a6969dc8da216bd772329a0de07\/5B891DCE\/t51.2885-15\/e35\/32247465_128780361243232_514916271838461952_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/2da7a134d9ad3be372063f6093605496\/5BC0ADCB\/t51.2885-15\/e35\/32224941_372301903279989_6294363752988934144_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/280f1313c259dc4d0376510409f8732c\/5B8C8022\/t51.2885-15\/e35\/32203272_207001453247401_3687478604733612032_n.jpg", "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/474bf9c8a2b6602c7369bee9717081df\/5B82D9C5\/t51.2885-15\/e35\/31849627_1444669212305253_6784179303941668864_n.jpg" ], "livemode": true, "metadata": { "colorStatus": "1" }, "name": "Spiral Vase", "package_dimensions": { "height": 4, "length": 3.3, "weight": 0, "width": 3.3 }, "shippable": true, "skus": { "object": "list", "data": [ { "id": "sku_CuUVFmRF15vP26", "object": "sku", "active": true, "attributes": [], "created": 1527014877, "currency": "usd", "image": "https:\/\/scontent-ort2-2.cdninstagram.com\/vp\/2bed25ca1ed9e21feaae58d829847814\/5B8149FB\/t51.2885-15\/e35\/32070134_366752667145429_1448799237532811264_n.jpg", "inventory": { "quantity": null, "type": "infinite", "value": null }, "livemode": true, "metadata": [], "package_dimensions": { "height": 4, "length": 3.3, "weight": 0, "width": 3.3 }, "price": 799, "product": "prod_CuUUxLqmNXRybC", "updated": 1528589872 } ], "has_more": false, "total_count": 1, "url": "\/v1\/skus?product=prod_CuUUxLqmNXRybC&active=true" }, "type": "good", "updated": 1528589874, "url": null } ], "has_more": false, "url": "\/v1\/products" };
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
