import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedQbCheckboxComponent } from './feed-qb-checkbox.component';

describe('FeedQbCheckboxComponent', () => {
  let component: FeedQbCheckboxComponent;
  let fixture: ComponentFixture<FeedQbCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedQbCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedQbCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
