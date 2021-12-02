import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Periodo } from 'src/app/models/periodo.model';
import { PeriodoService } from '../../services/periodo.service';
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
  selector: 'app-altaperiodo',
  templateUrl: './altaperiodo.component.html',
  styleUrls: ['./altaperiodo.component.css']
})
export class AltaperiodoComponent implements OnInit {
  @Output() salida = new EventEmitter();
  periodo: Periodo = new Periodo ();

  
  

  constructor(public router: Router, private periodoService: PeriodoService) {



   }

  ngOnInit() {
  }
  registrarperiodo(forma:NgForm) {
    this.periodoService.registrarperiodo(this.periodo).then((periodo: any) => {
      Toast.fire(periodo.msg, '', 'success');
      forma.reset();
      this.router.navigateByUrl('inicio');
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }
  

}
