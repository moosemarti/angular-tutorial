import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from '../service-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  
  shippingCosts;
  constructor(
    private cartService: ServiceCartService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}