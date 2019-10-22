import { Component, OnInit } from '@angular/core';
import { Pickup } from '../pickup_task';
import { PickupService } from '../pickup.service';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  pickups: Pickup[];
  constructor(private pickupService: PickupService) { }

  ngOnInit() {
    this.getPickups();
  }
  getPickups(): void {
    this.pickupService.getPickups()
    .subscribe(pickups => this.pickups = pickups);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pickupService.addPickup({ name } as Pickup)
      .subscribe(pickup => {
        this.pickups.push(pickup);
      });
  }

  delete(pickup: Pickup): void {
    this.pickups = this.pickups.filter(p => p !== pickup);
    this.pickupService.deletePickup(pickup).subscribe();
  }

}