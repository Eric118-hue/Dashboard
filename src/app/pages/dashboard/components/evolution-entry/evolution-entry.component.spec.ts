import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionEntryComponent } from './evolution-entry.component';

describe('EvolutionEntryComponent', () => {
  let component: EvolutionEntryComponent;
  let fixture: ComponentFixture<EvolutionEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EvolutionEntryComponent]
    });
    fixture = TestBed.createComponent(EvolutionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
