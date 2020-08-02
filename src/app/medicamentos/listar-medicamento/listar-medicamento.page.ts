import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/medicamentos/services/services.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
import { Medicamento } from 'src/app/model/Medicamento';

@Component({
  selector: 'app-listar-medicamento',
  templateUrl: './listar-medicamento.page.html',
  styleUrls: ['./listar-medicamento.page.scss'],
})
export class ListarMedicamentoPage implements OnInit {

  constructor(
    private ms: ServicesService,
    public router: Router) { }

  medicamento:Medicamento;
  medicamentos: Observable<any[]>
  medicamentos2: any[];




  ngOnInit() {
    this.medicamentos = this.ms.getMedicamentos();
  }
  
   trackByFn(index,obj){
    return obj.uid;
  }

  showCrearMedicamento(){
    this.router.navigate([`crear-medicamento`])
  }

  deleteMedicamento(medicamentoID: string) {
    this.ms.deleteMedicamento(medicamentoID);
  }



  

  


}
