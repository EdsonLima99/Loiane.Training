import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Curso } from '../../model/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
})
export class CursosListaComponent {
  @Input() cursos: Curso[] = [];
  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);

  readonly colunasExibidas = ['nome', 'categoria', 'acoes'];

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.adicionar.emit(true);
  }

  onEdit(curso: Curso){
    this.editar.emit(curso);
  }
}
