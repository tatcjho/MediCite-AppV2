import { Component, OnInit } from '@angular/core';
import {MedicamentoDetalle} from 'src/app/model/MedicamentoDetalle'
import {Medicamento} from 'src/app/model/Medicamento'
import {ServicioDetalleService} from 'src/app/medicamento-detalle/servicio-detalle.service'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-md',
  templateUrl: './listar-md.page.html',
  styleUrls: ['./listar-md.page.scss'],
})
export class ListarMdPage implements OnInit {

  mediDetalles: Observable<any[]>
  md: MedicamentoDetalle;
  


  constructor(
    private mdService: ServicioDetalleService,
    private route: ActivatedRoute,
    public router: Router ) { }

  ngOnInit() {
    this.mediDetalles = this.mdService.getMediDetalles();
    
  }

  trackByFn(index,obj){
    return obj.uid;
  }

  showCrearMD(){
    this.router.navigate([`medicamento-detalle`])
  }

  deleteMedicamentoDetalle(medicamentoID: string) {
    this.mdService.deleteMedicamentoDetalle(medicamentoID);
  }


}
