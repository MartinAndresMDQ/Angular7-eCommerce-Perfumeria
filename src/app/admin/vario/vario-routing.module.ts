import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VarioComponent } from './vario.component';
import { VariosComponent } from './varios/varios.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MarcasComponent } from './varios/marcas/marcas.component';
import { TiposComponent } from './varios/tipos/tipos.component';

const routes: Routes = [{
  path: '',
  component: VarioComponent,
  children: [{
    path: '',
    component: VariosComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ],
  exports: [RouterModule],
})
export class VarioRoutingModule { }

export const routedComponents = [
  VarioComponent,
  VariosComponent,
  TiposComponent,
  MarcasComponent
];
