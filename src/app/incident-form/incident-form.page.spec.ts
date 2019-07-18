import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentFormPage } from './incident-form.page';

describe('IncidentFormPage', () => {
  let component: IncidentFormPage;
  let fixture: ComponentFixture<IncidentFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
