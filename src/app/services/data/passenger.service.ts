import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, concat, map, of, tap, throwError, toArray } from "rxjs";
import { TripEntryExit, TripOverview, TripPassenger } from "src/app/models/trip";

@Injectable({
  providedIn: "root"
})
export class PassengerService {
  constructor(private http: HttpClient) {

  }

  tripOverview(): Observable<TripOverview> {
    return this.http.get<TripOverview>('/tripOverview');
  }

  passengerEntryExit(): Observable<{
    inTransit: TripEntryExit;
    inTown: TripEntryExit;
  }> {
    return concat(
      this.http.get<TripEntryExit>('/passengerEntryExitInTransit'),
      this.http.get<TripEntryExit>('/passengerEntryExitInTown'),
    ).pipe(
      catchError((error : any ) => {
              // Handle the error here
      console.error('Error man:', error);
      // Optionally, re-throw the error or return a default value
      return throwError('Something went wrong');
      }),
      toArray(),
      map(r => ({
        'inTransit': r[0],
        'inTown': r[1],
      })))
  }


  evolutionByTrip(): Observable<TripPassenger[]> {
    return this.http.get<TripPassenger[]>('/evolutionByTrip');
  }

  evolutionEntryExitByTrip(): Observable<TripEntryExit[]> {
    return this.http.get<TripEntryExit[]>('/evolutionEntryExitByTrip');
  }
}
