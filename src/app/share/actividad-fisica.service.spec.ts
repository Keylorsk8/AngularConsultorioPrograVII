import { TestBed } from '@angular/core/testing';

import { ActividadFisicaService } from './actividad-fisica.service';

describe('ActividadFisicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActividadFisicaService = TestBed.get(ActividadFisicaService);
    expect(service).toBeTruthy();
  });
});
