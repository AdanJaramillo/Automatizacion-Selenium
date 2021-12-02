import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Periodo } from '../models/periodo.model';
@Injectable({
  providedIn: 'root'
})

export class PeriodoService {

 constructor(private http: HttpClient) { }


 registrarperiodo(periodo:Periodo){

  return this.http.post('http://localhost:3000/api/periodo/registrar',periodo).toPromise();
 }

}