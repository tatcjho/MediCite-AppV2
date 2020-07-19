import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicamentoPage } from './listar-medicamento.page';

describe('ListarMedicamentoPage', () => {
  let component: ListarMedicamentoPage;
  let fixture: ComponentFixture<ListarMedicamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMedicamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMedicamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
