import { TestBed, inject } from '@angular/core/testing';

import { UsuariosAplicativoService } from './usuarios-aplicativo.service';

describe('UsuariosAplicativoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariosAplicativoService]
    });
  });

  it('should be created', inject([UsuariosAplicativoService], (service: UsuariosAplicativoService) => {
    expect(service).toBeTruthy();
  }));
});
