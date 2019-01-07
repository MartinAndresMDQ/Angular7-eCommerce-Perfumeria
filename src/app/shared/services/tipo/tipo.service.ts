import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Type } from '../../classes/product';
// import { Type } from '../../@model/product';

@Injectable()
export class TipoService {

  public itemsCollection: AngularFirestoreCollection<Type>;
  items: Observable<Type[]>;
  constructor(public db: AngularFirestore) {
    this.itemsCollection = this.db.collection<Type>('Tipo');
    this.items = this.itemsCollection.valueChanges();
  }

  public getTipos(): Observable<any> {
    return this.itemsCollection.snapshotChanges();
  }

  public save(data: any, isNew?: boolean): Promise<void> {
    if (isNew)
      data.id = this.db.createId();
    return this.itemsCollection.doc(data.id).set(Object.assign({}, JSON.parse(JSON.stringify(data))));
  }

  public remove(data: any) {
    return this.itemsCollection.doc(data.id).delete()//.set(Object.assign({}, JSON.parse(JSON.stringify(data))));
  }

  // public addTipo(id: string, product: any): Promise<void> {
  //   if (id == null)
  //     id = this.db.createId();
  //   product.id = id;
  //   return this.itemsCollection.doc(id).set(Object.assign({}, JSON.parse(JSON.stringify(product))));
  // }

}
