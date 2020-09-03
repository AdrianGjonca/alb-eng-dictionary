import { TestBed } from '@angular/core/testing';

import { DictionaryDataFetchService } from './dictionary-data-fetch.service';

describe('DictionaryDataFetchService', () => {
  let service: DictionaryDataFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryDataFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
