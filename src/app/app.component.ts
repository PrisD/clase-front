import { Component } from '@angular/core';
import { Curso } from './model/curso.model';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-clase';
  cursos: Curso[] = [];
  mensaje: string = '';

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos();  // Llamar para cargar los cursos al iniciar
  }

  // Método para obtener todos los cursos
  getCursos(): void {
    this.cursoService.getCursos().subscribe(
      (data: Curso[]) => {
        this.cursos = data;
      },
      (error) => {
        console.error('Error al obtener cursos:', error);
      }
    );
  }
}