import { Aula } from './aula';

export interface Curso {
  id: number;
  nome: string;
  categoria: string;
  aula: Aula[];
}
