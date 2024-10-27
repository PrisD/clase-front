import { Component, EventEmitter, Output } from '@angular/core';
import { Curso } from '../../../model/curso.model';
import { EstudianteService } from '../../../services/estudiante.service';
import { Estudiante } from '../../../model/estudiante.model';

@Component({
  selector: 'app-modal-new-estudiante',
  templateUrl: './modal-new-estudiante.component.html',
  styleUrl: './modal-new-estudiante.component.css'
})
export class ModalNewEstudianteComponent {
  @Output() estudianteActualizado = new EventEmitter<void>();
  nombre: any;
  fechaNac: any;
  curso?: Curso;
  
  constructor(private estudianteService: EstudianteService) { }
  
  postEstudiante() {
    let estudiante = new Estudiante(this.nombre,this.fechaNac,undefined,this.curso)
    this.estudianteService.addEstudiante(estudiante).subscribe(
      (response) => {
        this.estudianteActualizado.emit();
      },
      (error) => {
        this.estudianteActualizado.emit();
      }
    )
  }


}
