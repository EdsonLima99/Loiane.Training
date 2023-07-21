import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = 'api/cursos';

  constructor(private httpCliente: HttpClient) {}

  listar() {
    return this.httpCliente.get<Curso[]>(this.API).pipe(
      first(),
      //delay(5000),
      tap((cursos) => console.log(cursos))
    );
  }

  buscarPorId(id: number) {
    return this.httpCliente.get<Curso>(`${this.API}/${id}`);
  }

  salvar(registro: Partial<Curso>) {
    return this.httpCliente.post<Curso>(this.API, registro).pipe(first());
  }
}
