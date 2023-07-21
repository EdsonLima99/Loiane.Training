import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoFormularioComponent } from './containers/curso-formulario/curso-formulario.component';
import { CursosComponent } from './containers/cursos/cursos.component';
import { CursoResolver } from './guards/curso.resolver';

const routes: Routes = [
  { path: '', component: CursosComponent },
  {
    path: 'novo',
    component: CursoFormularioComponent,
    resolve: { curso: CursoResolver },
  },
  {
    path: 'editar/:id',
    component: CursoFormularioComponent,
    resolve: { curso: CursoResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
