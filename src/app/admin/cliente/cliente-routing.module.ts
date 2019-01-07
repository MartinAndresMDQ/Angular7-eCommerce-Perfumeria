import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [{
    path: '',
    component: ClientesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule { }

export const routedComponents = [
  ClienteComponent,
  ClientesComponent,
];
