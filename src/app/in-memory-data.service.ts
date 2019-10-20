import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pickup } from './pickup';


@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const PICKUP = [
  {
    books:12,
    location: '861 Regulus St. , Foster City, CA 94404',
    timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
    instructions: 'none',
    zip: 94404,
    taskID:1
  },

  {
    books:4,
    location: '192 Peter St. , Foster City, CA 94404',
    timeframe: 'Tue, Sep 10, 9:00 AM - Thu, Sep 12, 7:30 PM',
    instructions: 'call me when you arrive: 650-109-0434',
    zip: 94404,
    taskID:2
  },

  {
    books:25,
    location: '928 Washington St. , Foster City, CA 94404',
    timeframe: 'Tue, Sep 10, 9:00 AM - Fri, Sep 13, 3:30 PM',
    instructions: 'ring the doorbell',
    zip: 94404,
    taskID: 3
  },

  {
    books: 8,
    location: '391 Sea Walk Blvd. , Foster City, CA 94404',
    timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
    instructions: 'Call (650)-532-5982 when you arrive at the front door.',
    zip: 94404,
    taskID: 4
  },

  {
    books:32,
    location: '152 Green St. , Foster City, CA 94404',
    timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
    instructions: 'none',
    zip: 94404,
    taskID:5
  },

  {
    books:55,
    location: '152 Sea Hall Ln. , Foster City, CA 94404',
    timeframe: 'Wed, Sep 11, 11:00 AM - Thu, Sep 12, 7:30 PM',
    instructions: 'Come around to the back',
    zip: 94404,
    taskID:6
  }

];

return { PICKUP };

  }
}

