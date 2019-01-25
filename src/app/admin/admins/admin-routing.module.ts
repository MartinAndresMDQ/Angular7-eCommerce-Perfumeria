import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminsComponent } from './admin/admin.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: '',
    component: AdminsComponent,
  },
  { 
    path: 'clientes',
    loadChildren: '../cliente/cliente.module#ClienteModule'
  },
  { 
    path: 'pedidos',
    loadChildren: '../pedido/pedido.module#PedidoModule'
  },
  { 
    path: 'productos',
    loadChildren: '../producto/producto.module#ProductoModule'
  },
  { 
    path: 'varios',
    loadChildren: '../vario/vario.module#VarioModule'
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  AdminsComponent,
];
