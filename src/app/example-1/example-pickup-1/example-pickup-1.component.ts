import { Component, OnInit } from '@angular/core';
import { Pickup } from '../../pickup';

@Component({
  selector: 'app-example-pickup-1',
  templateUrl: './example-pickup-1.component.html',
  styleUrls: ['./example-pickup-1.component.css']
})
export class ExamplePickup1Component implements OnInit {
pickup: Pickup = {
  books: 8,
  location: '861 Regulus St. , Foster City, CA 94404',
  timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
  instructions: 'Call (650)-532-5982 when you arrive at the front door.',
  city: 'Foster City'
  };
  constructor() { }

  ngOnInit() {
  }

}