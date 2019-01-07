import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent } from './producto.component';
import { ProductosComponent } from './productos/productos.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  component: ProductoComponent,
  children: [{
    path: '',
    component: ProductosComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ],
  exports: [RouterModule],
})
export class ProductoRoutingModule { }

export const routedComponents = [
  ProductoComponent,
  ProductosComponent,
];
