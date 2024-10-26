import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tema } from '../model/tema.model';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  backurl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  addTema(tema: Tema): Observable<string> {
    return this.httpClient.post<string>(`${this.backurl}/tema`, tema);
  }

  updateTema(tema: Tema): Observable<void> {
    return this.httpClient.put<void>(`${this.backurl}/tema`, tema);
  }

  deleteTema(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.backurl}/tema?id=${id}`);
  }

  getTema(id: number): Observable<Tema> {
    return this.httpClient.get<Tema>(`${this.backurl}/tema?id=${id}`);
  }

  getTemas(): Observable<Tema[]> {
    return this.httpClient.get<Tema[]>(`${this.backurl}/temas`);
  }

}