import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../../model/estudiante.model';
import { EstudianteService } from '../../../services/estudiante.service';

@Component({
  selector: 'app-modal-estudiante',
  templateUrl: './modal-estudiante.component.html',
  styleUrl: './modal-estudiante.component.css'
})
export class ModalEstudianteComponent {
  @Input() estudiante!: Estudiante;
  @Output() estudianteActualizado = new EventEmitter<void>();
  flagEditar: boolean = false;

  constructor(private estudianteService: EstudianteService) { }
  
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

}
