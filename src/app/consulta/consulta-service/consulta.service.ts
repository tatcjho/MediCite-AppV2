import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Consulta } from 'src/app/model/Consulta';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private afs: AngularFirestore) { }

  getMedicos(): Observable<any[]> {
    return this.afs.collection('usuarios',
      ref => ref.where('rol', '==', 
      this.afs.collection('roles').doc('medico').ref))
      .valueChanges();   
  }

  createConsulta(consulta: Consulta) {
    const refConsulta = this.afs.collection('consultas');
    consulta.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(consulta));
    refConsulta.doc(consulta.uid).set(param, {merge: true});
  }
  
}
