import { TestBed } from '@angular/core/testing';

import { LocalidadService } from './localidad.service';

describe('LocalidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalidadService = TestBed.get(LocalidadService);
    expect(service).toBeTruthy();
  });
});
