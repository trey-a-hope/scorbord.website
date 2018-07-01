import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/stripe/product';
import { ProductDetailComponent } from '../../views/product-detail/product-detail.component';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Jsonp } from '@angular/http';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Array<Product> = new Array<Product>();

  constructor(private productsService : ProductsService, private router: Router, private sharedService : SharedService) { 
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
    this.sharedService.setProductData(product);
    this.router.navigateByUrl('/product-detail');
  }

}
