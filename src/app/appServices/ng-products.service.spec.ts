import { TestBed } from '@angular/core/testing';

import { NgProductsService } from './ng-products.service';

describe('NgProductsService', () => {
  let service: NgProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
