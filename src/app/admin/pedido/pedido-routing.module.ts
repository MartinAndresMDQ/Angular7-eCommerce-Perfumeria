import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoComponent } from './pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  component: PedidoComponent,
  children: [{
    path: '',
    component: PedidosComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ],
  exports: [RouterModule],
})
export class PedidoRoutingModule { }

export const routedComponents = [
  PedidoComponent,
  PedidosComponent,
];
