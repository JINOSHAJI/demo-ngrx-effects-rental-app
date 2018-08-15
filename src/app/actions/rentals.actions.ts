import { Rentals } from "../rentals/rentals";

export const LOAD_RENTALS="LOAD_RENTALS";
export const LOAD_RENTALS_SUCCESS="LOAD_RENTALS_SUCCESS";
export const TOOGLE_INPUT_FORM="TOOGLE_INPUT_FORM";

export class ToggleInputAction{
    readonly type = TOOGLE_INPUT_FORM;
    public payload: boolean;

    constructor(payload: boolean){
        console.log('payload action toggle');
        console.log(payload);
        this.payload=payload;
    }
} 

export class LoadRentalsAction{
    readonly type = LOAD_RENTALS;
    constructor(){}
}

export class LoadRentalsSuccessAction{
    readonly type = LOAD_RENTALS_SUCCESS;
    constructor(public payload: Rentals[]){}
}

export type Action = 
    LoadRentalsAction
    | LoadRentalsSuccessAction
    | ToggleInputAction