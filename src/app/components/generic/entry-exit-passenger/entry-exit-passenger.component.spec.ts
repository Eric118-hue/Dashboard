import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryExitPassengerComponent } from './entry-exit-passenger.component';

describe('EntryExitPassengerComponent', () => {
  let component: EntryExitPassengerComponent;
  let fixture: ComponentFixture<EntryExitPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EntryExitPassengerComponent]
    });
    fixture = TestBed.createComponent(EntryExitPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
