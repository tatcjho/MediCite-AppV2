import { Component, OnInit } from '@angular/core';
import {MedicamentoDetalle} from 'src/app/model/MedicamentoDetalle'
import {Medicamento} from 'src/app/model/Medicamento'
import {ServicioDetalleService} from 'src/app/medicamento-detalle/servicio-detalle.service'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-medicamento-detalle',
  templateUrl: './medicamento-detalle.page.html',
  styleUrls: ['./medicamento-detalle.page.scss'],
})
export class MedicamentoDetallePage implements OnInit {

  md: MedicamentoDetalle = new MedicamentoDetalle();
  medicamentos: Observable<Medicamento[]>;
  medicamentoSelected: Medicamento;

  constructor(
    private mdService: ServicioDetalleService,
    private route: ActivatedRoute,
    public router: Router ) { }

  ngOnInit() {
    this.medicamentos = this.mdService.getMedicamentos();
  }

  onChange() {
    console.log("Selected: " + this.medicamentoSelected + " uid: " + this.medicamentoSelected.uid);
  }

  createMediDetalle() {
    this.mdService.createMediDetalle(this.md, this.medicamentoSelected.uid);
    //this.router.navigate(['lista-empleos'])
  }



}
