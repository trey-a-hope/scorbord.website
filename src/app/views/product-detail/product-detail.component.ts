import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private sharedService : SharedService) { }

  ngOnInit() {
    this.product = this.sharedService.getProductData();
  }
  purchase = (): void => {
    alert('Patience my friend...');
  }
}
