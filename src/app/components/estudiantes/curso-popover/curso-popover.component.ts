import { Component, Input } from '@angular/core';
import { Curso } from '../../../model/curso.model';

@Component({
  selector: 'app-curso-popover',
  templateUrl: './curso-popover.component.html',
  styleUrl: './curso-popover.component.css'
})
export class CursoPopoverComponent {
  @Input() curso!: Curso;

}
