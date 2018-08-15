import { TestBed, inject } from '@angular/core/testing';

import { RentalsService } from './rentals.service';

describe('RentalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentalsService]
    });
  });

  it('should be created', inject([RentalsService], (service: RentalsService) => {
    expect(service).toBeTruthy();
  }));
});
