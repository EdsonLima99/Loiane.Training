import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.scss'],
})
export class CursoFormularioComponent {
  formulario = this.formBuild.group({
    nome: [''],
    categoria: [''],
  });

  constructor(
    private formBuild: NonNullableFormBuilder,
    private servico: CursosService,
    private snackBar: MatSnackBar,
    private localizacao: Location
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.servico.salvar(this.formulario.value).subscribe(
      (resultado) => this.onSucess(),
      (erro) => this.onError()
    );
  }

  onCancel() {
    this.localizacao.back();
  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Error ao salvar curso.', '', { duration: 5000 });
  }
}