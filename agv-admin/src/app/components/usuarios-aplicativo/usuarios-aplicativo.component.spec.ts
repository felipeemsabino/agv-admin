import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAplicativoComponent } from './usuarios-aplicativo.component';

describe('UsuariosAplicativoComponent', () => {
  let component: UsuariosAplicativoComponent;
  let fixture: ComponentFixture<UsuariosAplicativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosAplicativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
