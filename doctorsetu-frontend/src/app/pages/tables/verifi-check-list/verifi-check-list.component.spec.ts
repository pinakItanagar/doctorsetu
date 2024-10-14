import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiCheckListComponent } from './verifi-check-list.component';

describe('VerifiCheckListComponent', () => {
  let component: VerifiCheckListComponent;
  let fixture: ComponentFixture<VerifiCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
