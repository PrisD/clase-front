import { Curso } from "./curso.model";

export class Estudiante {
  id?: number;
  nombre: string;
  fechaNac: Date;
  curso?: Curso;

  constructor(nombre: string, fechaNac: Date, id?: number, curso?: Curso) {
    this.id = id;
    this.nombre = nombre;
    this.fechaNac = fechaNac;
    this.curso = curso;
  }
}
