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

  createConsulta(consulta: Consulta) {
    const refConsulta = this.afs.collection('consultas');
    consulta.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(consulta));
    refConsulta.doc(consulta.uid).set(param, {merge: true});
  }

  getMedicos(): Observable<any[]> {

    return this.afs.collection('usuarios',
    ref => ref.where('rol', '==', 'medico')).valueChanges();

    /*
    try {

      let aux: any = this.afs.collection('usuarios',
        ref => ref.where('rol', '==', 'medico')
          .orderBy('especialidad', 'desc')).valueChanges();

      console.error("Medicos recuperados: ", aux);
      return aux;

    } catch(error) {
      console.error("Error", error);
      throw error;
    }
    */
  }
  
}
