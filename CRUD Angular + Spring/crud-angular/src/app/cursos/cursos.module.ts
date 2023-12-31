import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CompartilhadoModule } from '../shared/compartilhado.module';
import { CursoFormularioComponent } from './containers/curso-formulario/curso-formulario.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './containers/cursos/cursos.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';

@NgModule({
  declarations: [CursosComponent, CursoFormularioComponent, CursosListaComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    CompartilhadoModule,
    ReactiveFormsModule,
  ],
})
export class CursosModule {}
