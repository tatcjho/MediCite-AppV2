import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/model/Consulta';
import { ConsultaService } from '../consulta-service/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';
import * as moment from 'moment'

@Component({
  selector: 'app-crear-consulta',
  templateUrl: './crear-consulta.page.html',
  styleUrls: ['./crear-consulta.page.scss'],
})

export class CrearConsultaPage implements OnInit {

  consulta: Consulta = new Consulta();

  fechamin: string;
  fechamax: string;
  horas: string[];

  paciente: Usuario;

  medicos: Observable<Usuario[]>;
  medicoSelected: Usuario;

  constructor(private consultaService: ConsultaService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {

    this.medicos = this.consultaService.getMedicos();

    this.consulta.fecha = moment().format();
    this.consulta.fecha = moment(this.consulta.fecha).toISOString();
    this.fechamin = moment().subtract(5, 'h').format();
    this.fechamin = moment(this.fechamin).toISOString();

    console.log(this.fechamin + "fecha consulta: " + this.consulta.fecha);
    
    this.fechamax = moment().add(60, 'd').format();
    this.fechamax = moment(this.fechamax).toISOString();

    //console.log(this.fechamin + "fecha consulta: " + this.consulta.fecha);


  }

  onChange() {
    console.log("Selected: " + this.medicoSelected + " uid: " + this.medicoSelected.uid);
  }

  async createConsulta() {

    this.consulta.medico = this.medicoSelected;

    // cargar datos de la sesion:
    console.log("obteniendo datos paciente ");
    this.consulta.paciente = await this.consultaService.getUsuarioById('0010254658');
    console.log("paciente = " + this.consulta.paciente.nombre);
    //
    this.consulta.estado = "Creada, pendiente de pago";
    this.consultaService.createConsulta(this.consulta, '0010254658', this.medicoSelected.uid);
    //this.router.navigate(['lista-empleos'])
  }


}
