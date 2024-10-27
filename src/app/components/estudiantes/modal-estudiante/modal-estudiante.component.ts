import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudiante } from '../../../model/estudiante.model';
import { EstudianteService } from '../../../services/estudiante.service';
import { Curso } from '../../../model/curso.model';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-modal-estudiante',
  templateUrl: './modal-estudiante.component.html',
  styleUrl: './modal-estudiante.component.css'
})
export class ModalEstudianteComponent implements OnInit {
  @Input() estudiante!: Estudiante;
  @Output() estudianteActualizado = new EventEmitter<void>();
  flagEditar: boolean = false;
  cursos : Curso[] = [];

  constructor(private estudianteService: EstudianteService, private cursoService : CursoService) { }
  ngOnInit(): void {
    this.getCursos();
  }
  
  eliminarEstudiante() {
    this.estudianteService.deleteEstudiante(this.estudiante.id!).subscribe();
    this.cerrarModal();
  }
  toggleEdit(): void {
    this.flagEditar = !this.flagEditar;
  }
  putEstudiante(): void {
    this.toggleEdit();
    this.estudianteService.updateEstudiante(this.estudiante).subscribe(
      () => {
        this.cerrarModal();
      });
  }
  cerrarModal() {
    this.flagEditar = false;
    this.estudianteActualizado.emit();
  }
  getCursos() {
    this.cursoService.getCursos().subscribe(
      (cursos: Curso[]) => {
        this.cursos = cursos;
      })
  }


}
