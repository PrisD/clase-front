import { Docente } from './docente.model';
import { Tema } from './tema.model';

export class Curso {
  id: number;
  tema: Tema;
  fechaInicio: Date;
  fechaFin: Date;
  docente: Docente;
  precio: number;

  constructor(
    id: number,
    tema: Tema,
    fechaInicio: Date,
    fechaFin: Date,
    docente: Docente,
    precio: number
  ) {
    this.id = id;
    this.tema = tema;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.docente = docente;
    this.precio = precio;
  }
}
