import { Injectable } from '@angular/core';
import { RentalsService } from '../rentals/rentals.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as rentalActions from '../actions/rentals.actions';
import { mergeMap,map }  from 'rxjs/operators';
import { Rentals } from '../rentals/rentals';

@Injectable()
export class RentalEffects {

    constructor(
        private rentalServices: RentalsService,
        private action$: Actions
     ) { }

    //  @Effect() 
    //  loadRentalsE$ = this.action$
    //  .ofType(rentalActions.LOAD_RENTALS)
    //  .switchMap(()=> this.rentalServices.getRentals())
    //  .map((rentals) => new (rentalActions.LoadRentalsSuccessAction(rentals)))

    @Effect()
    loadRentals$ = this.action$.pipe(
        ofType(rentalActions.LOAD_RENTALS),
        mergeMap( (action: rentalActions.LoadRentalsAction)=> this.rentalServices.getRentals()
        .pipe(
            map((rentals: Rentals[]) => (new rentalActions.LoadRentalsSuccessAction(rentals)))
        ))
    );
    
}