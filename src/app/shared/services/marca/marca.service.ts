import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Make } from '../../classes/product';
// import { Make } from '../../@model/product';

@Injectable()
export class MarcaService {

  public itemsCollection: AngularFirestoreCollection<Make>;
  items: Observable<Make[]>;
  constructor(public db: AngularFirestore) {
    this.itemsCollection = this.db.collection<Make>('Marca');
    this.items = this.itemsCollection.valueChanges();
  }

  public getMarcas(): Observable<any> {
    return this.itemsCollection.snapshotChanges();
  }

  // public addMarca(id: string, product: any): Promise<void> {
  //   if (id == null)
  //     id = this.db.createId();
  //   product.id = id;
  //   return this.itemsCollection.doc(id).set(Object.assign({}, JSON.parse(JSON.stringify(product))));
  // }
  

  public save(data: any, isNew?: boolean): Promise<void> {
    if (isNew)
      data.id = this.db.createId();
    return this.itemsCollection.doc(data.id).set(Object.assign({}, JSON.parse(JSON.stringify(data))));
  }

  public remove(data: any) {
    return this.itemsCollection.doc(data.id).delete()//.set(Object.assign({}, JSON.parse(JSON.stringify(data))));
  }

}
