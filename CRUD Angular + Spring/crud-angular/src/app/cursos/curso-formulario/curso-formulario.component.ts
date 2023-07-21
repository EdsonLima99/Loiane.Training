import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.scss'],
})
export class CursoFormularioComponent {
  formulario: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.formulario = this.formBuild.group({
      nome: [null],
      categoria: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {}

  onCancel() {}
}
