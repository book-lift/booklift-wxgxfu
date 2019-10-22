import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Pickup} from './pickup_task';


@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pickups = [
    {
      id:1,
      name:'pickup-1',
      books:12,
      location: '861 Regulus St. , Foster City, CA 94404',
      timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
      instructions: 'none',
      zip: 94404
    },

    {
      id:2,
      name:'pickup-2',
      books:4,
      location: '192 Peter St. , Foster City, CA 94404',
      timeframe: 'Tue, Sep 10, 9:00 AM - Thu, Sep 12, 7:30 PM',
      instructions: 'call me when you arrive: 650-109-0434',
      zip: 94404
    },

    {
      id:3,
      name:'pickup-3',
      books:25,
      location: '928 Washington St. , Foster City, CA 94404',
      timeframe: 'Tue, Sep 10, 9:00 AM - Fri, Sep 13, 3:30 PM',
      instructions: 'ring the doorbell',
      zip: 94404
    },

    {
      id:4,
      name:'pickup-4',
      books: 8,
      location: '391 Sea Walk Blvd. , Foster City, CA 94404',
      timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
      instructions: 'Call (650)-532-5982 when you arrive at the front door.',
      zip: 94404
    },

    {
      id:5,
      name:'pickup-5',
      books:32,
      location: '152 Green St. , Foster City, CA 94404',
      timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
      instructions: 'none',
      zip: 94404
 
    },

    {
      id:6,
      name:'pickup-6',
      books:55,
      location: '152 Sea Hall Ln. , Foster City, CA 94404',
      timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
      instructions: 'Come around to the back',
      zip: 94404

    }

  ];

  return { pickups };

  }
  genId(pickups: Pickup[]): number {
    return pickups.length > 0 ? Math.max(...pickups.map(pickup => pickup.id)) + 1 : 1;
  }
}

