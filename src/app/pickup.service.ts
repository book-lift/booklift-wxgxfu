import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pickup } from './pickup_task';



@Injectable({ providedIn: 'root' })
export class PickupService {

//  constructor() { }

//}
  private pickupsUrl = 'api/pickups';  // URL to web api

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
      private http: HttpClient,
      ) { }

    /** GET pickupes from the server */
    getPickups (): Observable<Pickup[]> {
      return this.http.get<Pickup[]>(this.pickupsUrl)
        .pipe(
          tap(_ => this.log('fetched heroes')),
          catchError(this.handleError<Pickup[]>('getPickups', []))
        );
    }

    /** GET pickup by id. Return `undefined` when id not found */
    getPickupNo404<Data>(id: number): Observable<Pickup> {
      const url = `${this.pickupsUrl}/?id=${id}`;
      return this.http.get<Pickup[]>(url)
        .pipe(
          map(pickups => pickups[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} pickup id=${id}`);
          }),
          catchError(this.handleError<Pickup>(`getPickup id=${id}`))
        );
    }

    /** GET pickup by id. Will 404 if id not found */
    getPickup(id: number): Observable<Pickup> {
      const url = `${this.pickupsUrl}/${id}`;
      return this.http.get<Pickup>(url).pipe(
        tap(_ => this.log(`fetched pickup id=${id}`)),
        catchError(this.handleError<Pickup>(`getPickup id=${id}`))
      );
    }

    /* GET pickups whose name contains search term */
    searchPickups(term: string): Observable<Pickup[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Pickup[]>(`${this.pickupsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found pickups matching "${term}"`)),
        catchError(this.handleError<Pickup[]>('searchPickups', []))
      );
    }

    //////// Save methods //////////

    /** POST: add a new pickup to the server */
    addPickup (pickup: Pickup): Observable<Pickup> {
      return this.http.post<Pickup>(this.pickupsUrl, pickup, this.httpOptions).pipe(
        tap((newPickup: Pickup) => this.log(`added pickup w/ id=${newPickup.id}`)),
        catchError(this.handleError<Pickup>('addPickup'))
      );
  }

  /** DELETE: delete the pickup from the server */
  deletePickup (pickup: Pickup | number): Observable<Pickup> {
    const id = typeof pickup === 'number' ? pickup : pickup.id;
    const url = `${this.pickupsUrl}/${id}`;

    return this.http.delete<Pickup>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted pickup id=${id}`)),
      catchError(this.handleError<Pickup>('deletePickup'))
    );
  }

  /** PUT: update the hero on the server */
  updatePickup (pickup: Pickup): Observable<any> {
    return this.http.put(this.pickupsUrl, pickup, this.httpOptions).pipe(
      tap(_ => this.log(`updated pickup id=${pickup.id}`)),
      catchError(this.handleError<any>('updatePickup'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    console.log(message)
  }

  
}
