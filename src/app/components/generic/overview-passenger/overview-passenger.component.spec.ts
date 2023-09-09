import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPassengerComponent } from './overview-passenger.component';

describe('OverviewPassengerComponent', () => {
  let component: OverviewPassengerComponent;
  let fixture: ComponentFixture<OverviewPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverviewPassengerComponent]
    });
    fixture = TestBed.createComponent(OverviewPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
