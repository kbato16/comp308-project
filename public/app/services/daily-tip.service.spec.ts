import { TestBed, inject } from '@angular/core/testing';

import { DailyTipService } from './daily-tip.service';

describe('DailyTipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyTipService]
    });
  });

  it('should be created', inject([DailyTipService], (service: DailyTipService) => {
    expect(service).toBeTruthy();
  }));
});
