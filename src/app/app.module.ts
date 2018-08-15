import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RentalsComponent } from './rentals/rentals.component';
import {StoreModule} from '@ngrx/store';
import { rentalReducer } from './reducers/rentals.reducers';
import { RentalEffects } from './effects/rentals.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    RentalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({rentalReducer: rentalReducer}),
    EffectsModule.forRoot([RentalEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
