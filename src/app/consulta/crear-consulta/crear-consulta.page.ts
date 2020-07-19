import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/model/Consulta';
import { ConsultaService } from '../consulta-service/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-crear-consulta',
  templateUrl: './crear-consulta.page.html',
  styleUrls: ['./crear-consulta.page.scss'],
})
export class CrearConsultaPage implements OnInit {

  consulta: Consulta = new Consulta();
  medicos: Observable<any[]>;

  constructor(private consultaService: ConsultaService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.medicos = this.consultaService.getMedicos();
    console.log("medicos encontrados: "+this.medicos);
  }

  /*showMedico(id: any) {
    this.router.navigate([`usuario/${id}`])
  }*/

  //Guardar


}
