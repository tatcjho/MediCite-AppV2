import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MedicamentoDetalle } from '../model/MedicamentoDetalle';
import { first } from 'rxjs/operators';
import { Diagnostico } from '../model/Diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {

  constructor(private afs: AngularFirestore) { }


  getDetalle(): Observable<any[]> {
    return this.afs.collection('medicamento-detalle').valueChanges();
  }

  getDiagnosticos(): Observable<any[]>{
    return this.afs.collection('diagnostico').valueChanges();

  }

  async getDetalleById(uid: string): Promise<MedicamentoDetalle> {
    try{
        let aux:any = await this.afs.collection("medicamento-detalle", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                          return doc;
                      }).catch(error => {
                          throw error;
                      });
        if(aux.length==0)
            return undefined;
        return aux[0];
    }catch(error){
      console.error("Error", error);
      throw error;
    } 
  }

  createDiagnostico(diagnostico: Diagnostico, detalleId: string) {
    
    const refConsulta = this.afs.collection('diagnostico');
    diagnostico.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(diagnostico));
    refConsulta.doc(diagnostico.uid).set(param, {merge: true} );

    this.afs.collection("diagnostico").doc(diagnostico.uid).update({
      medicamentoDetalle: this.afs.collection("medicamento-detalle").doc(detalleId)});

  }

  deleteMedicamentoDetalle(docID: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.afs
            .collection('diagnostico')
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
