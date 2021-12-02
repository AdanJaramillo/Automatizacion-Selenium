import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EspecialidadService {
  url = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}

  registrar(nombre: any, carrera: any) {
    return this.http
      .post(`${this.url}/especialidad/registrar`, { nombre, carrera })
      .toPromise();
  }
}
