/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParseManagerService } from './parse-manager.service';

describe('ParseManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseManagerService]
    });
  });

  it('should ...', inject([ParseManagerService], (service: ParseManagerService) => {
    expect(service).toBeTruthy();
  }));
});
