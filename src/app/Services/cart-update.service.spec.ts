import { TestBed, inject } from '@angular/core/testing';

import { CartUpdateService } from './cart-update.service';

describe('CartUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartUpdateService]
    });
  });

  it('should be created', inject([CartUpdateService], (service: CartUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
