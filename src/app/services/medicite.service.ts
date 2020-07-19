import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediciteService {

  constructor(private afs: AngularFirestore) { }

  getUsers(): Observable<any[]>{
    return this.afs.collection('users', 
        ref => ref.orderBy('cedula', 'asc')).valueChanges();
  }

  getUser(uid: string): Observable<Event>{
    let itemDoc = this.afs.doc<Event>(`users/${uid}`);
    return itemDoc.valueChanges();
  }
  
}
