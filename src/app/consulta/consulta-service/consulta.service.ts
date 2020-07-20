import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Consulta } from 'src/app/model/Consulta';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';

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

  createConsulta(consulta: Consulta, pacienteId: string, medicoId: string) {
    
    const refConsulta = this.afs.collection('consultas');
    consulta.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(consulta));
    refConsulta.doc(consulta.uid).set(param, {merge: true} );

    this.afs.collection("consultas").doc(consulta.uid).update({
      paciente: this.afs.collection("usuarios").doc(pacienteId).ref,
      medico: this.afs.collection("usuarios").doc(medicoId).ref,});

  }
  
}
