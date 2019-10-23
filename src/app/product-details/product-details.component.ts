import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

import { ServiceCartService } from '../service-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  addToCart(product){
    window.alert('Your product has been added to the cart.');
    this.CartService.addToCart(product);
  }

  product;
  constructor(
    private route: ActivatedRoute,
    private CartService: ServiceCartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => 
    {
      this.product = products[+params.get('productID')];
    });
  }

}