import { TestBed } from '@angular/core/testing';

import { ServicioDetalleService } from './servicio-detalle.service';

describe('ServicioDetalleService', () => {
  let service: ServicioDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
