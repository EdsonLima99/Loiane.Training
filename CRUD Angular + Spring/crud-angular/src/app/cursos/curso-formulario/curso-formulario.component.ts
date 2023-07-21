import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.scss'],
})
export class CursoFormularioComponent {
  formulario: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private servico: CursosService,
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.formBuild.group({
      nome: [null],
      categoria: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.servico.salvar(this.formulario.value).subscribe(
      (resultado) => console.log(resultado),
      (erro) => this.onError()
    );
  }

  onCancel() {}

  private onError() {
    this.snackBar.open('Error ao salvar curso', '', { duration: 5000 });
  }
}
