import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Curso } from '../../model/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
})
export class CursosListaComponent {
  @Input() cursos: Curso[] = [];
  @Output() add = new EventEmitter(false);

  readonly colunasExibidas = ['nome', 'categoria', 'acoes'];

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.add.emit(true);
  }
}
