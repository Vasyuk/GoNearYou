import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMarketComponent } from './single-market.component';

describe('SingleMarketComponent', () => {
  let component: SingleMarketComponent;
  let fixture: ComponentFixture<SingleMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
