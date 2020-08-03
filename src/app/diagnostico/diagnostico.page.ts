import { Component, OnInit } from '@angular/core';
import { Diagnostico } from '../model/Diagnostico';
import { Observable } from 'rxjs';
import { MedicamentoDetalle } from '../model/MedicamentoDetalle';
import { DiagnosticoService} from 'src/app/diagnostico/diagnostico.service' 
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.page.html',
  styleUrls: ['./diagnostico.page.scss'],
})
export class DiagnosticoPage implements OnInit {

  diagnostico: Diagnostico = new Diagnostico();

  detalles: Observable<MedicamentoDetalle[]>;
  detallesSelected:  MedicamentoDetalle[];

  constructor( 
    private diagService: DiagnosticoService,
    private route: ActivatedRoute,
    public router: Router ) { }

  ngOnInit() {
    this.detalles = this.diagService.getDetalle();
  }

  onChange() {
    console.log("Selected: " + this.detallesSelected + " uid: " + this.detallesSelected);
  }

  async createDiagnostico() {
    this.diagService.createDiagnostico(this.diagnostico,this.detallesSelected.uid);
    
    //console.log("Medicamento = " + this.md.medicamento.uid);
    //this.router.navigate(['lista-empleos'])
  }

}
