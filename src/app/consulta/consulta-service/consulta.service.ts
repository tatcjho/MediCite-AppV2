import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Consulta } from 'src/app/model/Consulta';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';

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

  async getUsuarioById(uid: string): Promise<Usuario> {
    try{
        let aux:any = await this.afs.collection("usuarios", 
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

  getUsuarioByUid(uid: string): Observable<any> {
    return this.afs.collection('usuarios',
      ref => ref.where('uid', '==', uid))
      .valueChanges();
  } 

  createConsulta(consulta: Consulta, pacienteId: string, medicoId: string) {
    
    const refConsulta = this.afs.collection('consultas');
    let auxPaciente = consulta.paciente;
    let auxMedico = consulta.medico;
    consulta.paciente = null;
    consulta.medico = null;
    consulta.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(consulta));
    
    refConsulta.doc(consulta.uid).set(param, {merge: true} );

    this.afs.collection("consultas").doc(consulta.uid).update({
      paciente: this.afs.collection("usuarios").doc(auxPaciente.uid).ref,
      medico: this.afs.collection("usuarios").doc(auxMedico.uid).ref,});

  }
  
}
