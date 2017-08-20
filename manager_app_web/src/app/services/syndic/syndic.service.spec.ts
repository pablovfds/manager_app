import { TestBed, inject } from '@angular/core/testing';

import { SyndicService } from './syndic.service';

describe('SyndicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SyndicService]
    });
  });

  it('should be created', inject([SyndicService], (service: SyndicService) => {
    expect(service).toBeTruthy();
  }));
});
