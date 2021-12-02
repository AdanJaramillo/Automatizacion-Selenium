
import { Acade } from "../../models/acade.model";
import { Component, OnInit } from "@angular/core";
import { Materia } from "../../models/materia.model";
import { MateriaService } from "src/app/services/materia.service";

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });


@Component({
  selector: "app-altamateria",
  templateUrl: "./altamateria.component.html",
  styleUrls: ["./altamateria.component.css"],
})
export class AltamateriaComponent implements OnInit {

  materia: Materia = new Materia();

  constructor(private materiaService: MateriaService) {}

  acade: Acade = new Acade();
  acades: Acade[];
  ngOnInit() {}

  registrarmateria() {
    console.log(this.materia);
    this.materiaService
      .registrarmateria(this.materia)
      .then((respuesta) => {})
      .catch((err) => {});
  }

 

}
