import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Curso } from '../../../model/curso.model';
import { EstudianteService } from '../../../services/estudiante.service';
import { Estudiante } from '../../../model/estudiante.model';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-modal-new-estudiante',
  templateUrl: './modal-new-estudiante.component.html',
  styleUrl: './modal-new-estudiante.component.css'
})
export class ModalNewEstudianteComponent implements OnInit {
  @Output() estudianteActualizado = new EventEmitter<void>();
  nombre: any;
  fechaNac: any;
  curso?: Curso;
  cursos: Curso[] = [];

  constructor(private estudianteService: EstudianteService, private cursoService: CursoService) { }
  ngOnInit(): void {
    this.getCursos();
  }

  postEstudiante() {
    let estudiante = new Estudiante(this.nombre, this.fechaNac, undefined, this.curso)
    console.log(estudiante);
    
    this.estudianteService.addEstudiante(estudiante).subscribe(
      (response) => {
        this.estudianteActualizado.emit();
      },
      (error) => {
        this.estudianteActualizado.emit();
      }
    )
  }

  getCursos() {
    this.cursoService.getCursos().subscribe(
      (cursos: Curso[]) => {
        this.cursos = cursos;
      })
  }

}
