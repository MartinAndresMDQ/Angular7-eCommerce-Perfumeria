import { NgModule } from '@angular/core';
import { VarioRoutingModule, routedComponents } from './Vario-routing.module';

import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../../../environments/environment';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { MaterialModule } from './material.module';
// import { AngularFirestore } from '@angular/fire/firestore';
import { NgxUploaderModule } from 'ngx-uploader';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MarcaService } from 'src/app/shared/services/marca/marca.service';
import { TipoService } from 'src/app/shared/services/tipo/tipo.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    GridModule,
    DropDownListModule,
    InputsModule,
    ButtonsModule,
    VarioRoutingModule,
    NgxUploaderModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [MarcaService, TipoService]
})
export class VarioModule { }
