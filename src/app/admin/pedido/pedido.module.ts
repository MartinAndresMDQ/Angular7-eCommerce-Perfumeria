import { NgModule } from '@angular/core';
import { PedidoRoutingModule, routedComponents } from './pedido-routing.module';

import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { MaterialModule } from './material.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxUploaderModule } from 'ngx-uploader';
import { PedidoService } from 'src/app/shared/services/pedido/pedido.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    GridModule,
    DropDownListModule,
    InputsModule,
    PedidoRoutingModule,
    // NgxUploaderModule,
    NgbModalModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireStorageModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [PedidoService]
})
export class PedidoModule { }
