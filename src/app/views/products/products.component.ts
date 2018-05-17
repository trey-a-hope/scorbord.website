import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/stripe/product';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Array<Product> = new Array<Product>();

  constructor(private productsService : ProductsService) { 
    var p1 = new Product;
    p1.name = 'IGM Ashtray';
    p1.caption = 'Uniquely designed ashtray.'
    this.products.push(p1);
    this.products.push(p1);
    this.products.push(p1);
    this.products.push(p1);
    this.products.push(p1);


    var p2 = new Product;
    p2.name = 'Logo Tag';
    p2.caption = 'Tag for shoe laces.'
    this.products.push(p2);
  }

  ngOnInit() {
    // this.productsService.getProducts().subscribe(data => {
    //   this.products = data;
    // });
  }

}
