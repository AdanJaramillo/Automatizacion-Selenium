import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import Swal  from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: Usuario  = new Usuario();
  constructor(public router: Router,private servicio: UsuarioService) { }

  ngOnInit() {
  }

  registrar() {

    if (this.usuario.password == this.usuario.confirmPass) {

    this.servicio.registrar(this.usuario).then(resp => {
     
      Swal.fire(
        'Good job!',
        'registrado con exito!',
        'success'
      )
      this.router.navigateByUrl('login');
    }).catch((err: any) => {
      
      
      
      Swal.fire({
        icon: 'error',
        title: err.msg,
        text: err.error.msg,
      })
 
      
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'no coinciden las contrasenas',
    })
  }
}

}
