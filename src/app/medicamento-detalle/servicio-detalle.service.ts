import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MedicamentoDetalle } from '../model/MedicamentoDetalle';

@Injectable({
  providedIn: 'root'
})
export class ServicioDetalleService {

  constructor(private afs: AngularFirestore) { }
  

  getMedicamentos(){
    return this.afs.collection('medicamento').valueChanges();
  }

  getMediDetalles(){
    return this.afs.collection('medicamento-detalle').valueChanges();
  }

  createMediDetalle(md: MedicamentoDetalle, medicamentoId: string) {
    
    const refConsulta = this.afs.collection('medicamento-detalle');
    md.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(md));
    refConsulta.doc(md.uid).set(param, {merge: true} );

    this.afs.collection("medicamento-detalle").doc(md.uid).update({
      medicamento: this.afs.collection("medicamento").doc(medicamentoId).ref});

  }

  deleteMedicamentoDetalle(docID: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.afs
            .collection('medicamento-detalle')
            .doc(docID)
            .delete()
            .then((obj: any) => {
                resolve(obj);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
  }
  
}


