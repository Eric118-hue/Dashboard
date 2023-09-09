import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionPassengerComponent } from './evolution-passenger.component';

describe('EvolutionPassengerComponent', () => {
  let component: EvolutionPassengerComponent;
  let fixture: ComponentFixture<EvolutionPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EvolutionPassengerComponent]
    });
    fixture = TestBed.createComponent(EvolutionPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
