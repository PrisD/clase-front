import { Component } from '@angular/core';
import { Tema } from '../../model/tema.model';
import { TemaService } from '../../services/tema.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {
  temas: Tema[] = [];
  selectedTema!: Tema;

  constructor(private temaService: TemaService) { }

  ngOnInit(): void {
    this.getTemas();
  }

  getTemas() {
    this.temaService.getTemas().subscribe((temas: Tema[]) => {
      this.temas = temas;
    })
  }

  openModal(tema: Tema) {
    this.selectedTema = tema;
  }
}