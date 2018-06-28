import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/stripe/product';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Array<Product> = new Array<Product>();

  constructor(private productsService : ProductsService) { 
  }

  ngOnInit() {
    this.productsService.testGetProducts().subscribe(products => {
      this.products = products;
    });

    // this.productsService.getProducts().subscribe(products => {
    //   this.products = products;
    // });
  }

  openProductDetail(product: Product){
    alert('Product details, coming soon...');
  }

}
