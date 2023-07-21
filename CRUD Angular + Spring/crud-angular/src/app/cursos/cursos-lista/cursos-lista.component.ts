import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
})
export class CursosListaComponent {
  @Input() cursos: Curso[] = [];

  readonly colunasExibidas = ['nome', 'categoria', 'acoes'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }
}
