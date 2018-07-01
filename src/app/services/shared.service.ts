import { Injectable } from '@angular/core';
import { Product } from '../models/stripe/product';
import { CookieService } from './cookie.service';

@Injectable()
export class SharedService {

  constructor(private cookieService: CookieService){

  }

  setProductData = (product: Product): void => {    
    this.cookieService.set('product', JSON.stringify(product));
  }

  getProductData = (): Product => {
    let product = JSON.parse(this.cookieService.get('product'));
    return product;
  }

} 
