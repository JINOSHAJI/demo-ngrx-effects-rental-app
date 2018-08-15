import * as rentalActions from '../actions/rentals.actions';
import { Rentals } from '../rentals/rentals';

export interface RentalState {
    showInputForm: boolean;
    rentals: Rentals[];
  }

  const initialState: RentalState =  {
    showInputForm: true,
    rentals:[]
  };

export function rentalReducer(state=initialState, action: rentalActions.Action){
    switch(action.type){
        case rentalActions.LOAD_RENTALS_SUCCESS:  {
            console.log('Payload');
            console.log(action.payload);
                return { 
                       ...state,
                     rentals: action.payload
                };
        }
        case rentalActions.TOOGLE_INPUT_FORM:  {
            console.log('Payload toogle');
            console.log(action.payload);
                return { 
                    ...state,
                    showInputForm: !action.payload
                };
        }
        default: {
            return state;
        }
    }
}