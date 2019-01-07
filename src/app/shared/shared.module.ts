import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
// Services
import { WINDOW_PROVIDERS } from "./services/windows.service";
import { LandingFixService } from '../shared/services/landing-fix.service';
import { InstagramService } from "./services/instagram.service";
import { ProductsService } from "./services/products.service";
import { WishlistService } from "./services/wishlist.service";
import { CartService } from "./services/cart.service";
import { OrderService } from "./services/order.service";
import { PaginationService } from "./classes/paginate";
// Pipes
import { OrderByPipe } from './pipes/order-by.pipe';
// components
import { HeaderOneComponent } from './header/header-one/header-one.component';
import { HeaderTwoComponent } from './header/header-two/header-two.component';
import { HeaderThreeComponent } from './header/header-three/header-three.component';
import { TopbarComponent } from './header/widgets/topbar/topbar.component';
import { NavbarComponent } from './header/widgets/navbar/navbar.component';
import { SettingsComponent } from './header/widgets/settings/settings.component';
import { LeftMenuComponent } from './header/widgets/left-menu/left-menu.component';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './footer/footer-two/footer-two.component';
import { InformationComponent } from './footer/widgets/information/information.component';
import { CategoriesComponent } from './footer/widgets/categories/categories.component';
import { WhyWeChooseComponent } from './footer/widgets/why-we-choose/why-we-choose.component';
import { ContactComponent } from './footer/widgets/contact/contact.component';
import { CopyrightComponent } from './footer/widgets/copyright/copyright.component';
import { SocialComponent } from './footer/widgets/social/social.component';
import { TableGeneric } from './tableGeneric/tableGeneric.component';
import { AuthService } from './services/auth.service';
import { TrueFalse } from './pipes/trueFalse.pipe';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    FooterOneComponent,
    FooterTwoComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    FooterOneComponent,
    FooterTwoComponent,
    OrderByPipe,
    NavbarComponent,
    SettingsComponent,
    LeftMenuComponent,
    TopbarComponent,
    InformationComponent,
    CategoriesComponent,
    WhyWeChooseComponent,
    ContactComponent,
    CopyrightComponent,
    SocialComponent
  ],
  providers: [
    WINDOW_PROVIDERS,
    LandingFixService,
    InstagramService,
    ProductsService,
    WishlistService,
    CartService,
    OrderService,
    PaginationService,
    AuthService
  ]
})
export class SharedModule { }
