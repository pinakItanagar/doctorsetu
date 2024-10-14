import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationTimesComponent } from './consultation-times.component';

describe('ConsultationTimesComponent', () => {
  let component: ConsultationTimesComponent;
  let fixture: ComponentFixture<ConsultationTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
