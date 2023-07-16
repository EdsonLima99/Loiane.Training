import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Curso } from '../modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Curso[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(cursos => console.log(cursos))
      );
  }
}
