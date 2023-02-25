import { TestBed } from '@angular/core/testing';

import { GestionpfeService } from './gestionpfe.service';

describe('GestionpfeService', () => {
  let service: GestionpfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionpfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
