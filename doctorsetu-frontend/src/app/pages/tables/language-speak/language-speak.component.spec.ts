import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSpeakComponent } from './language-speak.component';

describe('LanguageSpeakComponent', () => {
  let component: LanguageSpeakComponent;
  let fixture: ComponentFixture<LanguageSpeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSpeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
