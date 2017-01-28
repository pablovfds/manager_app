/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParseServiceService } from './parse-service.service';

describe('ParseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseServiceService]
    });
  });

  it('should ...', inject([ParseServiceService], (service: ParseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
