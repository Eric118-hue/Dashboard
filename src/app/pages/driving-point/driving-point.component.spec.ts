import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingPointComponent } from './driving-point.component';

describe('DrivingPointComponent', () => {
  let component: DrivingPointComponent;
  let fixture: ComponentFixture<DrivingPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrivingPointComponent]
    });
    fixture = TestBed.createComponent(DrivingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
