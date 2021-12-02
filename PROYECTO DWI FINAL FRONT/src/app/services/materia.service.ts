import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../models/materia.model';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  url='http://localhost:3000/api'

  constructor(private http: HttpClient) { }


  registrarmateria(materia: Materia){
    return this.http.post(`${this.url}/materia/registrar`,materia ).toPromise();
  }
 
}
