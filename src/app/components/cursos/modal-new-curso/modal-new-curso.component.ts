import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../services/curso.service';
import { TemaService } from '../../../services/tema.service';
import { DocenteService } from '../../../services/docente.service';
import { Tema } from '../../../model/tema.model';
import { Docente } from '../../../model/docente.model';
import { Curso } from '../../../model/curso.model';

@Component({
  selector: 'app-modal-new-curso',
  templateUrl: './modal-new-curso.component.html',
  styleUrl: './modal-new-curso.component.css'
})
export class ModalNewCursoComponent implements OnInit {
  fechaInicio: any;
  fechaFin: any;
  docente: any;
  tema: any;
  precio: any;
  temas: any;
  docentes: any;


  constructor(private cursoService: CursoService, private temaService: TemaService, private docenteService: DocenteService) {

  }
  ngOnInit(): void {
    this.getDocentes();
    this.getTemas();
  }
  getTemas(): void {
    this.temaService.getTemas().subscribe((temas: Tema[]) => {
      this.temas = temas;
    });
  }

  getDocentes(): void {
    this.docenteService.getDocentes().subscribe((docentes: Docente[]) => {
      this.docentes = docentes;
    });
  }
  
  postCurso() {
    let curso = new Curso(0, this.tema, this.fechaInicio, this.fechaFin, this.docente, this.precio)
    this.cursoService.addCurso(curso).subscribe(
      (response) => {
        console.log("Se pudo crear el curso !");
        console.log(response);        
      },
      (error) => {
        console.log(error);
        
      }
    )
  }
}
