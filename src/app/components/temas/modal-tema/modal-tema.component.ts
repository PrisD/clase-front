import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TemaService } from '../../../services/tema.service';
import { Tema } from '../../../model/tema.model';

@Component({
  selector: 'app-modal-tema',
  templateUrl: './modal-tema.component.html',
  styleUrl: './modal-tema.component.css'
})
export class ModalTemaComponent {
  @Input() tema!: Tema;
  @Output() temaActualizado = new EventEmitter<void>();
  flagEditar: boolean = false;

  constructor(private temaService: TemaService) { }


  eliminarTema() {
    this.temaService.deleteTema(this.tema.id).subscribe();
    this.cerrarModal();
  }

  toggleEdit(): void {
    this.flagEditar = !this.flagEditar;
  }

  putTema(): void {
    this.toggleEdit();
    this.temaService.updateTema(this.tema).subscribe(
      () => {
        this.cerrarModal();
      });;
  }
  cerrarModal() {
    this.flagEditar = false;
    this.temaActualizado.emit();
  }
}