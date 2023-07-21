import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoFormularioComponent } from './curso-formulario.component';

describe('CursoFormularioComponent', () => {
  let component: CursoFormularioComponent;
  let fixture: ComponentFixture<CursoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoFormularioComponent]
    });
    fixture = TestBed.createComponent(CursoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
