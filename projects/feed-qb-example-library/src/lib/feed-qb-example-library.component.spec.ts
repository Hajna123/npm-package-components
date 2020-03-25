import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedQbExampleLibraryComponent } from './feed-qb-example-library.component';

describe('FeedQbExampleLibraryComponent', () => {
  let component: FeedQbExampleLibraryComponent;
  let fixture: ComponentFixture<FeedQbExampleLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedQbExampleLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedQbExampleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
