import { TestBed, inject } from '@angular/core/testing';

import { ConstellationsService } from './constellations.service';

describe('ConstellationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstellationsService]
    });
  });

  it('should be created', inject([ConstellationsService], (service: ConstellationsService) => {
    expect(service).toBeTruthy();
  }));
});
