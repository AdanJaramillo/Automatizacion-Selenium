import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  url='http://localhost:3000/api'

  constructor(private http: HttpClient) {}

    registrar(grupo: Grupo){
      return this.http.post(`${this.url}/grupo/registrar`, grupo).toPromise();
    }
    obtener(){
      return this.http.get(`${this.url}/grupo/obtener`,).toPromise();
    }
    actualizar(grupo: Grupo, idGrupo: string){
      return this.http.put(`${this.url}/grupo/obtener${idGrupo}`, grupo).toPromise();
    }
    eliminar(idGrupo: string){
      return this.http.delete(`${this.url}/grupo/eliminar/${idGrupo}`).toPromise();
    }
    getPeriodo() {
      return this.http.get(`${this.url}/perido`).toPromise;
    }
    /*postPeriodo(nombre:any) {
      return this.http.post(`${this.url}/periodo`,{
      nombre:nombre
    });
    }*/
    getCarrera() {
      return this.http.get(`${this.url}/carrera`).toPromise;
    }
    /*postCarrera(nombre:any){
      return this.http.post(`${this.url}/carrera`,{
        nombre:nombre
      });
    }*/
    getEspecialidad(){
      return this.http.get(`${this.url}/especialidad`).toPromise;
    }
    /*postEspecialidad(){
      return this.postCarrera(`${this.url}/especialidad`);
        
      }*/
    }

   

