import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsultaPage } from './crear-consulta.page';

describe('CrearConsultaPage', () => {
  let component: CrearConsultaPage;
  let fixture: ComponentFixture<CrearConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearConsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
