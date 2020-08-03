import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';
import { switchMap, first, take, map } from "rxjs/operators";
import * as firebase from "firebase/app";
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private platform: Platform,
) { }

  getRol(uid: string): Observable<any[]>{

    return this.afs.collection("roles",ref => ref.where("uid","==",uid)).valueChanges();

  }

  async insertUsuario(user: Usuario, document: string, password: string){

    try{

      const uid = await this.afAuth.createUserWithEmailAndPassword(user.correo, password);
      user.uid = uid.user.uid

      const refUser = this.afs.collection("usuarios")
      const param = JSON.parse(JSON.stringify(user))
      refUser.doc(user.uid).set(param)

      this.afs.collection("usuarios").doc(user.uid).update({
        rol: this.afs.collection("roles").doc(document).ref
      })


    }catch(error){

      console.log('Error on register user', error);
      
    }
  }
}