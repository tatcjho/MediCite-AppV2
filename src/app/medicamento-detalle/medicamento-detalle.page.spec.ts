import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoDetallePage } from './medicamento-detalle.page';

describe('MedicamentoDetallePage', () => {
  let component: MedicamentoDetallePage;
  let fixture: ComponentFixture<MedicamentoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
