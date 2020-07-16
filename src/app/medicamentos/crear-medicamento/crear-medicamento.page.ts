import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/model/Medicamento';
import { ServicesService } from 'src/app/medicamentos/services/services.service';

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.page.html',
  styleUrls: ['./crear-medicamento.page.scss'],
})
export class CrearMedicamentoPage implements OnInit {

  medicamento: Medicamento = new Medicamento();

  constructor(private ms: ServicesService) { }

  ngOnInit() {
  }

  async guardarMedicamento(){
    console.log(this.medicamento);

    //let number = await this.ms.    .saveEmpleado2(this.empleo);
    //console.log("Nuevo Registro de medicamento almacenado", number);
    //this.empleoService.saveEmpleo(this.empleo);
  }

}
