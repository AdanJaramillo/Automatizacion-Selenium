import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/grupo.model';
import { GrupoService } from 'src/app/services/grupo.service';
/*import { Periodo } from 'src/app/services/perido,service';
import { Carrera } from 'src/app/services/carrera,service';
import { Especialidad } from 'src/app/services/especialidad.service';*/


@Component({
  selector: 'app-altagrupo',
  templateUrl: './altagrupo.component.html',
  styleUrls: ['./altagrupo.component.css']
})
export class AltagrupoComponent implements OnInit {

  grupo: Grupo = new Grupo();
  grupos: Grupo[];
  /*periodo: Periodo = new Periodo();
  periodos: Periodo[];
  carrera: Carrera = new Carrera();
  carreras: Carrera[];
  especialidad: Especialidad = new Especialidad
  especialedades: Especialidad[];*/
  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    /*this.obtenerPer();
    this.obtenerCarr();
    this.obtenerEspec();*/
  } 

  registrar(){
      console.log(this.grupo);
    this.grupoService.registrar(this.grupo).then((resp) =>{
      console.log(resp);
    }).catch((err) =>{
      console.log(err);
      });
  }
  obtener(){
    this.grupoService.obtener().then((resp) =>{
      console.log(resp);
    }).catch((err) =>{
      console.log(err);
    });
  }
  actualizar(idGrupo: string){
     this.grupoService.actualizar(this.grupo, idGrupo).then((resp) =>{
       console.log(resp);
     }).catch((err) =>{
       console.log(err);
     });
  }
  eliminar(idGrupo: string){
    this.grupoService.eliminar(idGrupo).then((resp) =>{
      console.log(resp);
    }).catch((err) =>{
      console.log(err);
    });
  }
  /*obtenerPer(){
    this.grupoService.getPeriodo().then((resp: any) =>{
      this.periodos = resp.perido;
      console.log(resp);
    }).catch(()=>{

    });
  }
  obtenerCarr(){
    this.grupoService.getCarrera().then((resp: any) =>{
      this.carrera = resp.carrera;
      console.log(resp);
    }).catch(()=>{

    });
  }
  obtenerEspec(){
    this.grupoService.getEspecialidad().then((resp: any) =>{
      this.especialedades = resp.especialidad;
      console.log(resp);
    }).catch(()=>{

    });
  }*/

}
