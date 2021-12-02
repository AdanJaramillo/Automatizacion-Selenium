import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Academia } from "../models/academia.model";
@Injectable({
  providedIn: "root",
})
export class AcademiaService {
  url = "http://localhost:3000/api/academia";
  constructor(private http: HttpClient) {}
  registrar(Academia: Academia) {
    return this.http
      .post(`${this.url}/registrar`, { nombre: Academia })
      .toPromise();
  }
  obtener() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }
  actualizar(id: any, nombre: String) {
    return this.http
      .put(`${this.url}/actualizar/${id}`, { nombre: nombre })
      .toPromise();
  }
  eliminar(id: any) {
    return this.http.delete(`${this.url}/eliminar/${id}`).toPromise();
  }
}
