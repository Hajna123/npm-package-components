import { TestBed } from '@angular/core/testing';

import { FeedQbExampleLibraryService } from './feed-qb-example-library.service';

describe('FeedQbExampleLibraryService', () => {
  let service: FeedQbExampleLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedQbExampleLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
