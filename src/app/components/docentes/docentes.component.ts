import { Component, OnInit } from '@angular/core';
import { Docente } from '../../model/docente.model';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.css'
})
export class DocentesComponent implements OnInit {
  docentes: Docente[] = [];
  selectedDocente!: Docente;

  constructor(private docenteService: DocenteService) { }

  ngOnInit(): void {
    this.getDocentes();
  }

  getDocentes() {
    this.docenteService.getDocentes().subscribe((docentes: Docente[]) => {
      this.docentes = docentes;
    })
  }

  openModal(docente: Docente) {
    this.selectedDocente = docente; 
  }
}