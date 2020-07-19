import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientePage } from './expediente.page';

describe('ExpedientePage', () => {
  let component: ExpedientePage;
  let fixture: ComponentFixture<ExpedientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
