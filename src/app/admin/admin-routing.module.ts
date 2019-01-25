import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
const routes: Routes = [
  { 
    path: '',
    loadChildren: './admins/admin.module#AdminsModule'
  },
  { 
    path: 'clientes',
    loadChildren: './cliente/cliente.module#ClienteModule'
  },
  { 
    path: 'pedidos',
    loadChildren: './pedido/pedido.module#PedidoModule'
  },
  { 
    path: 'productos',
    loadChildren: './producto/producto.module#ProductoModule'
  },
  { 
    path: 'varios',
    loadChildren: './vario/vario.module#VarioModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
