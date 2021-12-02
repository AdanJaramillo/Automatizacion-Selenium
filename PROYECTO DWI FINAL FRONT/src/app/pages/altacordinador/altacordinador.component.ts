import { Component, OnInit } from '@angular/core';
import { Coordinador } from '../../models/coordinador.model';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Acade } from 'src/app/models/acade.model';
@Component({
  selector: 'app-altacordinador',
  templateUrl: './altacordinador.component.html',
  styleUrls: ['./altacordinador.component.css']
})
export class AltacordinadorComponent implements OnInit {
coordinador: Coordinador = new Coordinador();
coordinadores: Usuario[];
acade: Acade = new Acade();
acades: Acade[];
  constructor(private servicio: UsuarioService) { }

  ngOnInit() {
    this.obtenerAcade();
    this.obtenerCoo();
  
  }
registrarCoo(){
   this.servicio.postCoordinador(this.coordinador).then(resp =>{
    console.log(resp);
    //location.href=""
  }).catch((err:any)=>{
    console.log(err);
  });
}
obtenerCoo(){
  this.servicio.getCoordinador().then((resp: any) =>{
   this.coordinadores = resp.usuarios;
    console.log(resp);
  }).catch(()=>{
    
  });
}
obtenerAcade(){
  this.servicio.getAcade().then((resp: any) =>{
   this.acades = resp.academia;
    console.log(resp);
  }).catch(()=>{
  });
}
}
