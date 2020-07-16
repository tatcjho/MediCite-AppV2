import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDiarioPage } from './caja-diario.page';

describe('CajaDiarioPage', () => {
  let component: CajaDiarioPage;
  let fixture: ComponentFixture<CajaDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
