import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = 'api/cursos';

  constructor(private httpCliente: HttpClient) {}

  listar() {
    return this.httpCliente.get<Curso[]>(this.API).pipe(
      first()
      //delay(5000),
      //tap((cursos) => console.log(cursos))
    );
  }

  buscarPorId(id: number) {
    return this.httpCliente.get<Curso>(`${this.API}/${id}`);
  }

  salvar(registro: Partial<Curso>) {
    if (registro.id != 0) {
      return this.atualizar(registro);
    }
    return this.criar(registro);
  }

  private criar(registro: Partial<Curso>) {
    return this.httpCliente.post<Curso>(this.API, registro).pipe(first());
  }

  private atualizar(registro: Partial<Curso>) {
    return this.httpCliente
      .put<Curso>(`${this.API}/${registro.id}`, registro)
      .pipe(first());
  }

  excluir(id: number) {
    return this.httpCliente.delete(`${this.API}/${id}`).pipe(first());
  }
}
