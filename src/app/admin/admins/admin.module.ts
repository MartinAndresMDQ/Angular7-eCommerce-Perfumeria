import { NgModule } from '@angular/core';
// import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { LocalidadService } from '../../@service/localidad/localidad.service';

@NgModule({
  imports: [
    // ThemeModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    
    AdminRoutingModule,

  ],
  declarations: [
    ...routedComponents,
  ],
  providers: []
})
export class AdminsModule { }
