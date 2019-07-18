import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToHandlePage } from './to-handle.page';

describe('ToHandlePage', () => {
  let component: ToHandlePage;
  let fixture: ComponentFixture<ToHandlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToHandlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToHandlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
