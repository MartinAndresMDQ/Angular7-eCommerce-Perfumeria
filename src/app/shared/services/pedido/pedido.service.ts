import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from '../../classes/order';
// import { Order } from '../../@model/order';
// import { Pedido } from '../../@model/pedido';

@Injectable()
export class PedidoService {

  public itemsCollection: AngularFirestoreCollection<Order>;
  items: Observable<Order[]>;
  constructor(private db: AngularFirestore) {
    this.itemsCollection = this.db.collection<Order>('Order');
    this.items = this.itemsCollection.valueChanges();
  }

  public getPedidos(): Observable<any> {
    return this.itemsCollection.snapshotChanges();
  }

  public addPedido(id: string, pedido: Order): Promise<void> {
    if (id == null)
      id = this.db.createId();
      pedido.orderId = id;
    return this.itemsCollection.doc(id).set(Object.assign({}, JSON.parse(JSON.stringify(pedido))));
  }

}
