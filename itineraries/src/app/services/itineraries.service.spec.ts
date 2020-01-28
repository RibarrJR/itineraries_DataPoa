import { TestBed } from '@angular/core/testing';

import { ItinerariesService } from './itineraries.service';

describe('ItinerariesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItinerariesService = TestBed.get(ItinerariesService);
    expect(service).toBeTruthy();
  });
});
