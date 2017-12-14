import { TestBed, inject } from '@angular/core/testing';

import { TatasuryaService } from './tatasurya.service';

describe('TatasuryaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TatasuryaService]
    });
  });

  it('should be created', inject([TatasuryaService], (service: TatasuryaService) => {
    expect(service).toBeTruthy();
  }));
});
