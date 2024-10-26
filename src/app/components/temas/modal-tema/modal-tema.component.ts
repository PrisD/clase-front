import { Component, Input } from '@angular/core';
import { TemaService } from '../../../services/tema.service';
import { Tema } from '../../../model/tema.model';

@Component({
  selector: 'app-modal-tema',
  templateUrl: './modal-tema.component.html',
  styleUrl: './modal-tema.component.css'
})
export class ModalTemaComponent {
  @Input() tema!: Tema;
  flagEditar: boolean = false;

  constructor(private temaService: TemaService) { }


  eliminarTema() {
    this.temaService.deleteTema(this.tema.id).subscribe();
  }

  toggleEdit(): void {
    this.flagEditar = !this.flagEditar;
  }

  putTema(): void {
    this.toggleEdit();
    this.temaService.updateTema(this.tema).subscribe();
  }
}