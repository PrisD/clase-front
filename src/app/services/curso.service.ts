import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  backurl = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  


}
