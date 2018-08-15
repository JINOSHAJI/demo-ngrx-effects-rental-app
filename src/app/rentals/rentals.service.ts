import { Injectable } from '@angular/core';
import { Rentals, PostRentals } from './rentals';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {
  private rentals: Rentals[];

  private rentalUrl:string ='rentals';

  constructor(private httpClient:HttpClient,private appService: AppService) {
    // this.rentals = [
    //   {
    //     Address: ['VKL', 'kottayam'],
    //     Description : 'Romm descr',
    //     Id : '1',
    //     ImageId : null,
    //     NumberOfRooms: 5,
    //     id: '1',
    //     Price: 2500.00
    //   },
    //   {
    //     Address: ['VKL'],
    //     Description : 'Romm descr',
    //     Id : '1',
    //     ImageId : null,
    //     NumberOfRooms: 5,
    //     id: '1',
    //     Price: 2500.00
    //   }
    // ];
   }
  
   newRentalData(): PostRentals {
    return {
      Address:'',
      Description: '',
      NumberOfRooms:null,
      Price: null
    };
  }

  getRentals(): Observable<Rentals[]> {
    console.log('Rentals service');
   return this.httpClient.get<Rentals[]>(this.appService.baseApiUrl+ this.rentalUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      tap(data => this.rentals = data),
      tap(data => console.log(this.rentals)),
      catchError(this.handleError)
    );
  }

  createRentals(Rentals: PostRentals): Observable<Rentals> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Rentals>(this.appService.baseApiUrl+ this.rentalUrl, Rentals, { headers: headers })
      .pipe(
        tap(data => console.log('createRentals: ' + JSON.stringify(data))),
        tap(data => {
           this.rentals.push(data);
        }),
        catchError(this.handleError)
      );
  }

 

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
