import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  colunasExibidas = ['nome', 'categoria', 'acoes'];

  //cursosServico: CursosService;

  constructor(
    private cursosServico: CursosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.cursos = [];
    //this.cursosServico = new CursosService();
    this.cursos$ = this.cursosServico.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(mensagemErro: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: mensagemErro,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }
}
