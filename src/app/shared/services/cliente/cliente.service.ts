import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cliente } from '../../classes/cliente';
// import { Cliente } from '../../@model/cliente';

@Injectable()
export class ClienteService {

  public itemsCollection: AngularFirestoreCollection<Cliente>;
  items: Observable<Cliente[]>;
  constructor(private db: AngularFirestore) {
    this.itemsCollection = this.db.collection<Cliente>('Cliente');
    this.items = this.itemsCollection.valueChanges();
  }

  public getClientes(): Observable<any> {
    return this.itemsCollection.snapshotChanges();
  }

  public addCliente(id: string, Cliente: Cliente): Promise<void> {
    if (id == null)
      id = this.db.createId();
      Cliente.id = id;
    return this.itemsCollection.doc(id).set(Object.assign({}, JSON.parse(JSON.stringify(Cliente))));
  }

}
