import { Component, OnInit } from "@angular/core";
import { EspecialidadService } from "../../services/especialidad.service";
import { CarreraService } from "src/app/services/carrera.service";

@Component({
  selector: "app-altaespecialidad",
  templateUrl: "./altaespecialidad.component.html",
  styleUrls: ["./altaespecialidad.component.css"],
})
export class AltaespecialidadComponent implements OnInit {
  carreras: any[] = [];
  carrera = "";
  especialidad = "";
  constructor(
    protected especialidadService: EspecialidadService,
    protected carreraService: CarreraService
  ) {}

  ngOnInit() {
    this.carreraService
      .obtener()
      .then((data) => {
        this.carreras = data["carreras"];
      })
      .catch((err) => {
        console.error(err);
      });
  }

  registrar(nombre: any, carrera: any) {
    //console.log(nombre, carrera);
    this.especialidadService
      .registrar(nombre, carrera)
      .then((data) => {
        alert(data["msg"]);
      })
      .catch((error) => {
        alert("Error al registrar la especialidad");
      });
  }
}
