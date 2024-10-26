import { Component } from '@angular/core';
import { TemaService } from '../../../services/tema.service';
import { Tema } from '../../../model/tema.model';

@Component({
  selector: 'app-modal-new-tema',
  templateUrl: './modal-new-tema.component.html',
  styleUrl: './modal-new-tema.component.css'
})
export class ModalNewTemaComponent {
  nombre: any;
  descripcion: any;

  constructor(private temaService: TemaService) { }

  postTema() {
    let tema = new Tema(0, this.nombre, this.descripcion)
    this.temaService.addTema(tema).subscribe(
      (response) => {
        console.log("Se creo el tema!");
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
