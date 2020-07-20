import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';

//import { Event } from '../models/event';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private afs: AngularFirestore) { }

  getRol(uid: string): Observable<any[]>{

    return this.afs.collection("roles",ref => ref.where("uid","==",uid)).valueChanges();

  }

  insertUsuario(user: Usuario){
    const refUser = this.afs.collection("usuarios")
    const param = JSON.parse(JSON.stringify(user))
    refUser.doc(user.uid).set(param)
  }


}