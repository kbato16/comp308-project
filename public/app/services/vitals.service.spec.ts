import { TestBed, inject } from '@angular/core/testing';

import { VitalsService } from './vitals.service';

describe('VitalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VitalsService]
    });
  });

  it('should be created', inject([VitalsService], (service: VitalsService) => {
    expect(service).toBeTruthy();
  }));
});
