import { Component, Input, OnInit } from '@angular/core';
import { DocenteService } from '../../../services/docente.service';
import { Estudiante } from '../../../model/estudiante.model';

@Component({
  selector: 'app-docente-popover',
  templateUrl: './docente-popover.component.html',
  styleUrl: './docente-popover.component.css'
})
export class DocentePopoverComponent implements OnInit {
  @Input() docenteId!: number;
  estudiantes: Estudiante[] = [];
  mostrarEstudiantes = false;
    

  constructor( private docenteService : DocenteService){}

  ngOnInit(): void {
    this.getAlumnosActivos();
  }
  getAlumnosActivos() {
    
    this.docenteService.getAlumnosActivos(this.docenteId).subscribe(
      (estudiantes: Estudiante[]) => {
        this.estudiantes = estudiantes;
        console.log(this.docenteId ,this.estudiantes);
      }
    )

  }
  toggleEstudiantes() {
    this.mostrarEstudiantes = !this.mostrarEstudiantes; // Cambia el estado de visibilidad
  }



}
