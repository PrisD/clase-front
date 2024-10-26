import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocenteService } from '../../../services/docente.service';
import { Docente } from '../../../model/docente.model';

@Component({
  selector: 'app-modal-docente',
  templateUrl: './modal-docente.component.html',
  styleUrl: './modal-docente.component.css'
})
export class ModalDocenteComponent {
  @Input() docente!: Docente;
  @Output() docenteActualizado = new EventEmitter<void>();
  flagEditar: boolean = false;
  
  constructor(private docenteService: DocenteService) { }


  eliminarDocente() {
    this.docenteService.deleteDocente(this.docente.id).subscribe();
    this.cerrarModal();
  }

  toggleEdit(): void {
    this.flagEditar = !this.flagEditar;
  }

  putDocente(): void {
    this.toggleEdit();
    this.docenteService.updateDocente(this.docente).subscribe(
      () => {
        this.cerrarModal();
      });
  }
  cerrarModal() {
    this.flagEditar = false;
    this.docenteActualizado.emit();
  }
}