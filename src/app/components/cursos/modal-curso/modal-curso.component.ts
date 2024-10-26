import { Component, Input, OnInit } from '@angular/core';
import { CursoService } from '../../../services/curso.service';
import { Curso } from '../../../model/curso.model';
import { Tema } from '../../../model/tema.model';
import { Docente } from '../../../model/docente.model';
import { TemaService } from '../../../services/tema.service';
import { DocenteService } from '../../../services/docente.service';
declare var $: any;
@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent implements OnInit {
  @Input() curso!: Curso;
  temas: Tema[] = [];
  docentes: Docente[] = [];
  flagEditar: boolean = false;

  constructor(
    private cursoService: CursoService,
    private temaService: TemaService,
    private docenteService: DocenteService
  ) { }

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

  toggleEdit(): void {
    this.flagEditar = !this.flagEditar;
  }

  putCurso(): void {
    this.toggleEdit();
    this.cursoService.updateCurso(this.curso).subscribe();
  }

  compareEntidad(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.nombre === e2.nombre : e1 === e2;
  }
  eliminarCurso() {
    this.cursoService.deleteCurso(this.curso.id).subscribe()
  }
  cancelar() {
    this.toggleEdit();
    this.cursoService.getCurso(this.curso.id).subscribe((curso: Curso) => {
      this.curso = curso;
    })
  }
}
