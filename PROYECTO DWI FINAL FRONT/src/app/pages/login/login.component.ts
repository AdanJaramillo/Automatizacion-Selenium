import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  usuario: Usuario  = new Usuario();
  constructor(private servicio: UsuarioService) { }

  ngOnInit() {
  
  }
 login(){
this.servicio.login(this.usuario).then(resp =>{
  console.log(resp);
  location.href="navbar"
}).catch((err:any)=>{
  console.log(err);
})
 }
}
