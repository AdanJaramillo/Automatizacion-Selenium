import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CarreraService {
  url = "http://localhost:3000/api";
  constructor(protected http: HttpClient) {}
  registrar(nombre: any) {
    return this.http
      .post(`${this.url}/carrera/registrar`, { nombre })
      .toPromise();
  }
  obtener() {
    return this.http.get(`${this.url}/carrera/obtener`).toPromise();
  }
}
