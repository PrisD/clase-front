import { Component, Input, OnInit } from '@angular/core';
import { CursoService } from '../../../services/curso.service';
import { Curso } from '../../../model/curso.model';
import { Tema } from '../../../model/tema.model';
import { Docente } from '../../../model/docente.model';
import { TemaService } from '../../../services/tema.service';
import { DocenteService } from '../../../services/docente.service';

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent implements OnInit {
  @Input() id!: number;
  curso!: Curso;
  temas: Tema[] = [];
  docentes: Docente[] = [];
  flagEditar: boolean = false;

  constructor(
    private cursoService: CursoService,
    private temaService: TemaService,
    private docenteService: DocenteService
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.selectCurso(this.id);
    }
    this.getDocentes();
    this.getTemas();
  }

  selectCurso(id: number): void {
    this.cursoService.getCurso(id).subscribe((curso: Curso) => {
      this.curso = curso;
      this.flagEditar = false; 
      console.log(this.curso);
    });
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

  toggleEdit(): void {
    this.flagEditar = !this.flagEditar;
  }

  putCurso(): void {
    this.toggleEdit();
    console.log('Curso actualizado:', this.curso);
  }

}
