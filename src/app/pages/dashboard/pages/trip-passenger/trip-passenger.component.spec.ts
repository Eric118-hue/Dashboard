import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPassengerComponent } from './trip-passenger.component';

describe('TripPassengerComponent', () => {
  let component: TripPassengerComponent;
  let fixture: ComponentFixture<TripPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TripPassengerComponent]
    });
    fixture = TestBed.createComponent(TripPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
