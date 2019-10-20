import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickupInfoService } from './pickup-info.service';
import {Pickup} from './pickup';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  // pickupInfo: Pickup[];

  // constructor(private pickupinfoService: PickupInfoService) { }
  
  // ngOnInit() {
  // this.getPickup();
  // }

  // getPickup(): void{
  //   this.pickupinfoService.getPickup()
  //     .subscribe(pickupInfo => this.pickupInfo = pickupInfo.slice(1,3));
  // }

  

}
