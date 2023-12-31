import { Aula } from './../../model/aula';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Curso } from '../../model/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.scss'],
})
export class CursoFormularioComponent {
  formulario!: FormGroup;

  constructor(
    private formBuild: NonNullableFormBuilder,
    private servico: CursosService,
    private snackBar: MatSnackBar,
    private localizacao: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];
    this.formulario = this.formBuild.group({
      id: [curso.id],
      nome: [
        curso.nome,
        [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
      ],
      categoria: [curso.categoria, [Validators.required]],
      aula: this.formBuild.array(this.obterAulas(curso))
    });
    console.log(curso);
  }

  private obterAulas(curso: Curso){
    const aulas = [];
    if(curso?.aula){
      curso.aula.forEach(aula => {aulas.push(this.criarLicao(aula))});
    }else{
      aulas.push(this.criarLicao());
    }
    return aulas;
  }

  private criarLicao(aula: Aula = {id: 0, nome: '', youtubeURL: ''}){
    return this.formBuild.group({
      id: [aula.id],
      nome: [aula.nome, [Validators.required]],
      youtubeURL: [aula.youtubeURL, [Validators.required]]
    })
  }

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

  getErrorMessage(fieldName: string) {
    const field = this.formulario.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo Obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }
}
