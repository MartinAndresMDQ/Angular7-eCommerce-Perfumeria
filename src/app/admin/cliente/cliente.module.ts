import { NgModule } from '@angular/core';
// import { ThemeModule } from '../../@theme/theme.module';
import { ClienteRoutingModule, routedComponents } from './cliente-routing.module';

// import { ClienteService } from '../../@service/cliente/cliente.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
// import { NbWindowModule } from '@nebular/theme';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { MaterialModule } from './material.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxUploaderModule } from 'ngx-uploader';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from 'src/app/shared/services/cliente/cliente.service';
import { LocalidadService } from 'src/app/shared/services/localidad/localidad.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { LocalidadService } from '../../@service/localidad/localidad.service';

@NgModule({
  imports: [
    // ThemeModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    GridModule,
    DropDownListModule,
    InputsModule,
    ButtonsModule,
    // NbWindowModule,
    ClienteRoutingModule,
    // NgxUploaderModule,
    NgbModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireStorageModule

  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [ClienteService, LocalidadService, AngularFirestore]
})
export class ClienteModule { }
