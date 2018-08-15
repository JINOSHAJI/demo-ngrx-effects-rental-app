import { Component, OnInit } from '@angular/core';
import { Rentals, PostRentals } from './rentals';
import { RentalsService } from './rentals.service';
import { Store, select } from '@ngrx/store';
import * as rentalActions from '../actions/rentals.actions';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {
  rentals: Rentals[];
  rental: PostRentals;
  errorMessage: string;
  isInputShown: boolean;
  // constructor(private rentalsService: RentalsService) { }
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('rentalReducer')).subscribe(
      rentals => {
        console.log(rentals);
        if (rentals) {
          this.rentals = rentals.rentals;
          this.isInputShown = rentals.showInputForm;
        }
      }
    );

    this.newRentalData();
    this.getRentals();
  }

  newRentalData(): void {
    this.rental = {
      Address: '',
      Description: '',
      NumberOfRooms: null,
      Price: null
    };
  };
  toggleInputForm(): void{
      this.store.dispatch({
        type:rentalActions.TOOGLE_INPUT_FORM,
        payload:this.isInputShown
      })
  };
  getRentals(): void {
    // this.store.select(state=> state.)
    this.store.dispatch({
      type: rentalActions.LOAD_RENTALS
    });
    
  }
  /*
    newRentalData(): void {
     this.rental= this.rentalsService.newRentalData();
    }
  
    getRentals(): void{
      console.log('api call');
     // this.rentals= this.rentalsService.getRentals();
      this.rentalsService.getRentals().subscribe(
       (rentals: Rentals[]) => this.rentals = rentals,
       (err: any) => this.errorMessage = err.error
      );
    }
  
    saveRentalData(): void{
      console.log(this.rental);
       this.rentalsService.createRentals(this.rental).subscribe(
        r=> { 
          console.log(r);
          this.rentalsService.newRentalData();
        },
        (err: any) => this.errorMessage = err.error
      );
    }
    */

}
