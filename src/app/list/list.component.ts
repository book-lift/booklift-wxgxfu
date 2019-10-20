import { Component, OnInit } from '@angular/core';
import {Pickup} from '../pickup';
import {PICKUP} from '../PickupDB';
import { PickupInfoService } from '../pickup-info.service';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
pickupInfo: Pickup[] = [];

constructor(private pickupinfoService: PickupInfoService) { }


ngOnInit() {
  this.getPickups();
  }

  getPickups(): void{
    this.pickupinfoService.getPickups()
    .subscribe(pickupInfo => this.pickupInfo = pickupInfo);
  }

  

// private router: Router
  
  // btnClick(){
  //       this.router.navigate(['/example-info-page-1']);
  //   }

}