import { Component, OnInit } from '@angular/core';
import {Delivery} from '../delivery'
@Component({
  selector: 'app-example-delivery-1',
  templateUrl: './example-delivery-1.component.html',
  styleUrls: ['./example-delivery-1.component.css']
})
export class ExampleDelivery1Component implements OnInit {
delivery: Delivery = {
  location: '1000 E Hillsdale Blvd, Foster City, CA 94404',
  timeframe: 'Wed, Sep 11, 11:00 AM - Friday, Sep 13, 9:30 PM ',
  instructions: 'Drop off the books at the front of the building in the green box labeled: Donations'
  };
  constructor() { }

  ngOnInit() {
  }

}