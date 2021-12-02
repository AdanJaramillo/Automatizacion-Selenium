import { CarreraService } from "../../services/carrera.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-altacarrera",
  templateUrl: "./altacarrera.component.html",
  styleUrls: ["./altacarrera.component.css"],
})
export class AltacarreraComponent implements OnInit {
  constructor(protected carreraService: CarreraService) {}
  nombre = "";
  ngOnInit() {}

  agregar(nombre: any) {
    this.carreraService
      .registrar(nombre)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
