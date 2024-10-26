import { Component } from '@angular/core';
import { DocenteService } from '../../../services/docente.service';
import { Docente } from '../../../model/docente.model';

@Component({
  selector: 'app-modal-new-docente',
  templateUrl: './modal-new-docente.component.html',
  styleUrl: './modal-new-docente.component.css'
})
export class ModalNewDocenteComponent {
  nombre: any;
  legajo: any;

  constructor(private docenteService: DocenteService) { }
  
  postDocente() {
    let docente = new Docente(0, this.nombre, this.legajo)
    this.docenteService.addDocente(docente).subscribe(
      (response) => {
        console.log("Se creo el docente!");
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
