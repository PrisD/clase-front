import { Component, EventEmitter, Output } from '@angular/core';
import { TemaService } from '../../../services/tema.service';
import { Tema } from '../../../model/tema.model';

@Component({
  selector: 'app-modal-new-tema',
  templateUrl: './modal-new-tema.component.html',
  styleUrl: './modal-new-tema.component.css'
})
export class ModalNewTemaComponent {
  @Output() temaActualizado = new EventEmitter<void>();
  nombre: any;
  descripcion: any;

  constructor(private temaService: TemaService) { }

  postTema() {
    let tema = new Tema(0, this.nombre, this.descripcion)
    this.temaService.addTema(tema).subscribe(
      (response) => {
        this.temaActualizado.emit()
      },
      (error) => {
        this.temaActualizado.emit()
      }
    )
  }
}
