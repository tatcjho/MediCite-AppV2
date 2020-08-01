import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/medicamentos/services/services.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-medicamento',
  templateUrl: './listar-medicamento.page.html',
  styleUrls: ['./listar-medicamento.page.scss'],
})
export class ListarMedicamentoPage implements OnInit {

  constructor(
    private ms: ServicesService,
    public router: Router) { }

  medicamentos: Observable<any[]>
  medicamentos2: any[];


  ngOnInit() {
    this.medicamentos = this.ms.getMedicamentos();
  }

   //Se utiliza cuando se tenga una lista observable asincrona
   trackByFn(index,obj){
    return obj.uid;
  }

  showCrearMedicamento(){
    this.router.navigate([`crear-medicamento`])
  }


}
