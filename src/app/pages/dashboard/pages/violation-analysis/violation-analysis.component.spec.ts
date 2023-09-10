import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationAnalysisComponent } from './violation-analysis.component';

describe('ViolationAnalysisComponent', () => {
  let component: ViolationAnalysisComponent;
  let fixture: ComponentFixture<ViolationAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViolationAnalysisComponent]
    });
    fixture = TestBed.createComponent(ViolationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
