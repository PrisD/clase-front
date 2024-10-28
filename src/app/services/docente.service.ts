import { Injectable } from '@angular/core';
import { Docente } from '../model/docente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Estudiante } from '../model/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  backurl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  addDocente(docente: Docente): Observable<string> {
    return this.httpClient.post<string>(`${this.backurl}/docente`, docente);
  }

  updateDocente(docente: Docente): Observable<void> {
    return this.httpClient.put<void>(`${this.backurl}/docente`, docente);
  }

  deleteDocente(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.backurl}/docente?id=${id}`);
  }

  getDocente(id: number): Observable<Docente> {
    return this.httpClient.get<Docente>(`${this.backurl}/docente?id=${id}`);
  }

  getDocentes(): Observable<Docente[]> {
    return this.httpClient.get<Docente[]>(`${this.backurl}/docentes`);
  }

  getAlumnosActivos(id: number): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.backurl}/docente/${id}/alumnos`);
  }

}
