export class Estudiante {
  id: number;
  nombre: string;
  fechaNac: Date;

  constructor(id: number, nombre: string, fechaNac: Date) {
    this.id = id;
    this.nombre = nombre;
    this.fechaNac = fechaNac;
  }
}
