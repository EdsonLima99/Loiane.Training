import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoFormularioComponent } from './curso-formulario/curso-formulario.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'novo', component: CursoFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
