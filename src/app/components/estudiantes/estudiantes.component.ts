import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../model/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  selectedEstudiante!: Estudiante;

  constructor(private estudianteService: EstudianteService) { }
  
  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe(
      (estudiantes: Estudiante[]) => {
        this.estudiantes = estudiantes;
      }
    )
  }
  openModal(estudiante: Estudiante) {
    this.selectedEstudiante = estudiante;
  }
}
