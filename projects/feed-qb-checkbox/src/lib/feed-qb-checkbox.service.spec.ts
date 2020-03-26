import { TestBed } from '@angular/core/testing';

import { FeedQbCheckboxService } from './feed-qb-checkbox.service';

describe('FeedQbCheckboxService', () => {
  let service: FeedQbCheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedQbCheckboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
