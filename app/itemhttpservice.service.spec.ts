import { TestBed } from '@angular/core/testing';

import { ItemhttpserviceService } from './itemhttpservice.service';

describe('ItemhttpserviceService', () => {
  let service: ItemhttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemhttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
