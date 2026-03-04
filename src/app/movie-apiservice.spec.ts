import { TestBed } from '@angular/core/testing';

import { OmdbAPIService } from './omdb-apiservice';

describe('OmdbAPIService', () => {
  let service: OmdbAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
