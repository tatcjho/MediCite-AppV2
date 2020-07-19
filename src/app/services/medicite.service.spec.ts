import { TestBed } from '@angular/core/testing';

import { MediciteService } from './medicite.service';

describe('MediciteService', () => {
  let service: MediciteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediciteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
