import { Component } from '@angular/core';
import { Curso } from '../../model/curso.model';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: Curso[] = [];
  selectedCurso!: Curso;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.getCursos().subscribe((data: Curso[]) => {
      this.cursos = data;
    });
  }

  openModal(curso: Curso) {
    this.selectedCurso = curso;
  }
  
}
