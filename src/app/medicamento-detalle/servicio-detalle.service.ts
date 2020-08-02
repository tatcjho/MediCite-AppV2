import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MedicamentoDetalle } from '../model/MedicamentoDetalle';

@Injectable({
  providedIn: 'root'
})
export class ServicioDetalleService {

  constructor(private afs: AngularFirestore) { }


  getMediDetalles(): Observable<any[]>{
    return this.afs.collection('medicamento-detalle').valueChanges();

  }

  getMedicamentos(): Observable<any[]>{
    return this.afs.collection('medicamento').valueChanges();

  }

  createMediDetalle(md: MedicamentoDetalle, medicamentoId: string) {
    
    const refConsulta = this.afs.collection('medicamento-detalle');
    md.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(md));
    refConsulta.doc(md.uid).set(param, {merge: true} );

    this.afs.collection("medicamento-detalle").doc(md.uid).update({
      medicamento: this.afs.collection("medicamento").doc(medicamentoId).ref});

  }
  
}


