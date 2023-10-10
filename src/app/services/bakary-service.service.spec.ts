import { TestBed } from '@angular/core/testing';

import { BakaryServiceService } from './bakary-service.service';

describe('BakaryServiceService', () => {
  let service: BakaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
