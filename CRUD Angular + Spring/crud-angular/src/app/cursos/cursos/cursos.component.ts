import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/compartilhado/componentes/error-dialog/error-dialog.component';

import { Curso } from '../modelo/curso';
import { CursosService } from '../servicos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  colunasExibidas = ['nome', 'categoria'];

  //cursosServico: CursosService;

  constructor(private cursosServico: CursosService, public dialog: MatDialog) {
    //this.cursos = [];
    //this.cursosServico = new CursosService();
    this.cursos$ = this.cursosServico.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.')
          return of([])
        })
      );

  }

  onError(mensagemErro: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: mensagemErro
    });
  }

  ngOnInit(): void {
  }
}
