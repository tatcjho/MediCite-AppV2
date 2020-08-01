import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Medicamento } from 'src/app/model/Medicamento';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private afs: AngularFirestore) { }

  //Guardar medicamento en la base
  saveMedicamento(medicamento:Medicamento){
    const refEmpleo = this.afs.collection("medicamento");
    medicamento.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(medicamento));
    refEmpleo.doc(medicamento.uid).set(param,{ merge:true});
  }

  //Sirve para listar los medicamentos
  getMedicamentos(): Observable<any[]>{
    return this.afs.collection('medicamento').valueChanges();
  }

  getMedicamentosPorNombre(): Observable<any[]>{
    return this.afs.collection('empleos', 
        ref => ref.where("nombre","==","Aspirina").
        orderBy('fecha', 'asc')).valueChanges();
  }

  getMedicamento(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<any>(`medicamento/${uid}`);
    return itemDoc.valueChanges();
  }


}
