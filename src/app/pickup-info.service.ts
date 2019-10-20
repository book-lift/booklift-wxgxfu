import { forwardRef, Injectable } from '@angular/core';
import {Pickup} from './pickup';
import {PICKUP} from './PickupDB';
import { Observable, of } from 'rxjs';
import {TaskService} from './task.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})

export class PickupInfoService {

  constructor(private taskService: TaskService) { }


  getPickups(): Observable<Pickup[]>{
    this.taskService.add('taskService: fetched pickup');
    return of(PICKUP);
  }

  getPickup(taskID: number): Observable<Pickup> {
  this.taskService.add('PickupInfoService: fetched pickup taskID=${taskID}');
  return of (PICKUP.find(pickup => pickup.taskID === taskID));
}

//   searchPickup(term: string): Observable<Pickup[]> {
//   if (!term.trim()) {
//     // if not search term, return empty hero array.
//     return of([]);
//   }
//   return this.http.get<Pickup[]>(`${this.pickupUrl}/?name=${term}`).pipe(
//     tap(_ => this.log(`found pickups matching "${term}"`)),
//     catchError(this.handleError<Pickup[]>('searchPickup', []))
//   );
// }

}

