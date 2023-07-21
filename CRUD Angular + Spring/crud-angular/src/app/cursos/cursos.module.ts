import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CompartilhadoModule } from '../shared/compartilhado.module';
import { CursoFormularioComponent } from './curso-formulario/curso-formulario.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [CursosComponent, CursoFormularioComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    CompartilhadoModule,
    ReactiveFormsModule,
  ],
})
export class CursosModule {}
