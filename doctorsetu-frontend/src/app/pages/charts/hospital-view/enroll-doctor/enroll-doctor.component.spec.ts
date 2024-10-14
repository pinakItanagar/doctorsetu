import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollDoctorComponent } from './enroll-doctor.component';

describe('EnrollDoctorComponent', () => {
  let component: EnrollDoctorComponent;
  let fixture: ComponentFixture<EnrollDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
