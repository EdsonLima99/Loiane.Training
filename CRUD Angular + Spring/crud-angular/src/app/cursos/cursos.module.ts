import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../compartilhado/app-material/app-material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    CompartilhadoModule
  ]
})
export class CursosModule { }
