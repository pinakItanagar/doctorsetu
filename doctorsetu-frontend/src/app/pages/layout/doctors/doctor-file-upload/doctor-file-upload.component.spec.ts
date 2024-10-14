import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFileUploadComponent } from './doctor-file-upload.component';

describe('DoctorFileUploadComponent', () => {
  let component: DoctorFileUploadComponent;
  let fixture: ComponentFixture<DoctorFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
