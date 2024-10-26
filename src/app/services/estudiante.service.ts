import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Estudiante } from '../model/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  backurl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  addEstudiante(estudiante: Estudiante): Observable<string> {
    return this.httpClient.post<string>(`${this.backurl}/estudiante`, estudiante);
  }

  updateEstudiante(estudiante: Estudiante): Observable<void> {
    return this.httpClient.put<void>(`${this.backurl}/estudiante`, estudiante);
  }

  deleteEstudiante(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.backurl}/estudiante?id=${id}`);
  }

  getEstudiante(id: number): Observable<Estudiante> {
    return this.httpClient.get<Estudiante>(`${this.backurl}/estudiante?id=${id}`);
  }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.backurl}/estudiantes`);
  }

}