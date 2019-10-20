import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PickupInfoService } from '../pickup-info.service';
import { Pickup } from '../pickup';
import { Delivery } from '../delivery'

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  pickupInfo: Pickup[];

  constructor(

  private route: ActivatedRoute,
  private pickupinfoService: PickupInfoService,
  private location: Location

  ) { }

  ngOnInit(): void {
    this.getPickup();
  }

  getPickup(): void {
  const taskID = +this.route.snapshot.paramMap.get('taskID');
  this.pickupinfoService.getPickup(taskID)
    .subscribe(pickupInfo => this.pickupInfo = pickupInfo);
}

delivery: Delivery = {
  location: '1000 E Hillsdale Blvd, Foster City, CA 94404',
  timeframe: 'Wed, Sep 11, 11:00 AM - Friday, Sep 13, 9:30 PM ',
  instructions: 'Drop off the books at the front of the building in the green box labeled: Donations'
  };

}