import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrackingComponent } from './live-tracking.component';

describe('LiveTrackingComponent', () => {
  let component: LiveTrackingComponent;
  let fixture: ComponentFixture<LiveTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LiveTrackingComponent]
    });
    fixture = TestBed.createComponent(LiveTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
