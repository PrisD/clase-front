import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  backurl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  addCurso(curso: Curso): Observable<string> {
    return this.httpClient.post<string>(`${this.backurl}/curso`, curso);
  }

  updateCurso(curso: Curso): Observable<void> {
    return this.httpClient.put<void>(`${this.backurl}/curso`, curso);
  }

  deleteCurso(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.backurl}/curso?id=${id}`);
  }

  getCurso(id: number): Observable<Curso> {
    return this.httpClient.get<Curso>(`${this.backurl}/curso?id=${id}`);
  }

  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.backurl}/cursos`);
  }

  getCursosSegunFechaFin(fecha: string): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.backurl}/cursos-fin?fecha=${fecha}`);
  }

}
