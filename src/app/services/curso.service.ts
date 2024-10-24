import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  backurl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  


}
