import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from "ngx-bar-rating";
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxImgZoomModule } from 'ngx-img-zoom';
// Home-one components
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { ServicesComponent } from './home/services/services.component';
import { BlogComponent } from './home/blog/blog.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { LogoComponent } from './home/logo/logo.component';
// // Home-two components
// import { HomeTwoComponent } from './home-two/home-two.component';
// import { SliderTwoComponent } from './home-two/slider/slider.component';
// import { ProductSliderTwoComponent } from './home-two/product-slider/product-slider.component';
// import { ParallaxBannerTwoComponent } from './home-two/parallax-banner/parallax-banner.component';
// import { ProductTabTwoComponent } from './home-two/product-tab/product-tab.component';
// // Home-three components
// import { HomeThreeComponent } from './home-three/home-three.component';
// import { SliderThreeComponent } from './home-three/slider/slider.component';
// import { CollectionBannerThreeComponent } from './home-three/collection-banner/collection-banner.component';
// import { ProductTabThreeComponent } from './home-three/product-tab/product-tab.component';
// import { ParallaxBannerThreeComponent } from './home-three/parallax-banner/parallax-banner.component';
// import { VerticalSlidersComponent } from './home-three/vertical-sliders/vertical-sliders.component';
// import { InstagramThreeComponent } from './home-three/instagram/instagram.component';
// // Home-four components
// import { HomeFourComponent } from './home-four/home-four.component';
// import { SliderFourComponent } from './home-four/slider/slider.component';
// import { ServicesFourComponent } from './home-four/services/services.component';
// import { ProductSliderFourComponent } from './home-four/product-slider/product-slider.component';
// import { ParallaxBannerFourComponent } from './home-four/parallax-banner/parallax-banner.component';
// import { SpecialProductsComponent } from './home-four/special-products/special-products.component';
// import { BlogFourComponent } from './home-four/blog/blog.component';
// // Home-five components
// import { HomeFiveComponent } from './home-five/home-five.component';
// import { SliderFiveComponent } from './home-five/slider/slider.component';
// import { LogoFiveComponent } from './home-five/logo/logo.component';
// import { BannerComponent } from './home-five/banner/banner.component';
// import { CollectionSliderComponent } from './home-five/collection-slider/collection-slider.component';
// import { ProductTabFiveComponent } from './home-five/product-tab/product-tab.component';
// import { ProductSliderFiveComponent } from './home-five/product-slider/product-slider.component';
// import { CollectionBannerFiveComponent } from './home-five/collection-banner/collection-banner.component';
// import { SpecialProductsFiveComponent } from './home-five/special-products/special-products.component';
// import { BlogFiveComponent } from './home-five/blog/blog.component';
// import { ServicesFiveComponent } from './home-five/services/services.component';
// import { InstagramFiveComponent } from './home-five/instagram/instagram.component';
// Home-six components
// import { HomeSixComponent } from './home-six/home-six.component';
// import { SliderSixComponent } from './home-six/slider/slider.component';
// import { CollectionBannerSixComponent } from './home-six/collection-banner/collection-banner.component';
// import { ProductTabSixComponent } from './home-six/product-tab/product-tab.component';
// import { ParallaxBannerSixComponent } from './home-six/parallax-banner/parallax-banner.component';
// import { BlogSixComponent } from './home-six/blog/blog.component';
// Home-seven components
// import { HomeSevenComponent } from './home-seven/home-seven.component';
// import { SliderSevenComponent } from './home-seven/slider/slider.component';
// import { CollectionBannerSevenComponent } from './home-seven/collection-banner/collection-banner.component';
// import { SpecialProductsSevenComponent } from './home-seven/special-products/special-products.component';
// import { ProductTabSevenComponent } from './home-seven/product-tab/product-tab.component';
// import { ProductSliderSevenComponent } from './home-seven/product-slider/product-slider.component';
// import { BlogSevenComponent } from './home-seven/blog/blog.component';
// import { ServicesSevenComponent } from './home-seven/services/services.component';
// import { InstagramSevenComponent } from './home-seven/instagram/instagram.component';
// // home-eight components
// import { HomeEightComponent } from './home-eight/home-eight.component';
// import { SliderEightComponent } from './home-eight/slider/slider.component';
// import { AboutUsComponent } from './home-eight/about-us/about-us.component';
// import { ProductSliderEightComponent } from './home-eight/product-slider/product-slider.component';
// import { VideoComponent } from './home-eight/video/video.component';
// import { BlogEightComponent } from './home-eight/blog/blog.component';
// import { InstagramEightComponent } from './home-eight/instagram/instagram.component';
// Products Components 
import { ProductComponent } from './product/product.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { ProductBoxVerticalComponent } from './product/product-box-vertical/product-box-vertical.component';
import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { CollectionNoSidebarComponent } from './product/collection/collection-no-sidebar/collection-no-sidebar.component';
import { ColorComponent } from './product/collection/filter/color/color.component';
import { BrandComponent } from './product/collection/filter/brand/brand.component';
import { PriceComponent } from './product/collection/filter/price/price.component';
// import { ProductLeftSidebarComponent } from './product/product-details/product-left-sidebar/product-left-sidebar.component';
// import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
// import { ProductNoSidebarComponent } from './product/product-details/product-no-sidebar/product-no-sidebar.component';
// import { ProductColLeftComponent } from './product/product-details/product-col-left/product-col-left.component';
// import { ProductColRightComponent } from './product/product-details/product-col-right/product-col-right.component';
// import { ProductColumnComponent } from './product/product-details/product-column/product-column.component';
import { ProductAccordianComponent } from './product/product-details/product-accordian/product-accordian.component';
// import { ProductLeftImageComponent } from './product/product-details/product-left-image/product-left-image.component';
// import { ProductRightImageComponent } from './product/product-details/product-right-image/product-right-image.component';
// import { ProductVerticalTabComponent } from './product/product-details/product-vertical-tab/product-vertical-tab.component';
// import { RelatedProductsComponent } from './product/product-details/related-products/related-products.component';
// import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { QuickViewComponent } from './product/widgets/quick-view/quick-view.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { SearchComponent } from './product/search/search.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopRoutingModule,
    SharedModule,
    SlickCarouselModule,
    BarRatingModule,
    RangeSliderModule,
    InfiniteScrollModule,
    NgxPayPalModule,
    NgxImgZoomModule
  ],
  declarations: [
    // Home one
    HomeComponent,
    SliderComponent,
    CollectionBannerComponent,
    ProductSliderComponent,
    ParallaxBannerComponent,
    ProductTabComponent,
    ServicesComponent,
    BlogComponent,
    InstagramComponent,
    LogoComponent,
    // // Home two
    // HomeTwoComponent,
    // SliderTwoComponent,
    // ProductSliderTwoComponent,
    // ParallaxBannerTwoComponent,
    // ProductTabTwoComponent,
    // // Home three
    // HomeThreeComponent,
    // SliderThreeComponent,
    // CollectionBannerThreeComponent,
    // ProductTabThreeComponent,
    // ParallaxBannerThreeComponent,
    // VerticalSlidersComponent,
    // InstagramThreeComponent,
    // // Home four
    // HomeFourComponent,
    // SliderFourComponent,
    // ServicesFourComponent,
    // ProductSliderFourComponent,
    // ParallaxBannerFourComponent,
    // SpecialProductsComponent,
    // BlogFourComponent,
    // // Home five
    // HomeFiveComponent,
    // SliderFiveComponent,
    // LogoFiveComponent,
    // BannerComponent,
    // CollectionSliderComponent,
    // ProductTabFiveComponent,
    // ProductSliderFiveComponent,
    // CollectionBannerFiveComponent,
    // SpecialProductsFiveComponent,
    // BlogFiveComponent,
    // ServicesFiveComponent,
    // InstagramFiveComponent,
    // Home Six
    // HomeSixComponent,
    // SliderSixComponent,
    // CollectionBannerSixComponent,
    // ProductTabSixComponent,
    // ParallaxBannerSixComponent,
    // BlogSixComponent,
    // // Home Seven
    // HomeSevenComponent,
    // SliderSevenComponent,
    // CollectionBannerSevenComponent,
    // SpecialProductsSevenComponent,
    // ProductTabSevenComponent,
    // ProductSliderSevenComponent,
    // BlogSevenComponent,
    // ServicesSevenComponent,
    // InstagramSevenComponent,
    // // Home Eight
    // HomeEightComponent,
    // SliderEightComponent,
    // AboutUsComponent,
    // ProductSliderEightComponent,
    // VideoComponent,
    // BlogEightComponent,
    // InstagramEightComponent,
    // Product
    ProductComponent,
    ProductBoxComponent,
    ProductBoxVerticalComponent,
    CollectionLeftSidebarComponent,
    CollectionRightSidebarComponent,
    CollectionNoSidebarComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    // ProductLeftSidebarComponent,
    // ProductRightSidebarComponent,
    // ProductNoSidebarComponent,
    // ProductColLeftComponent,
    // ProductColRightComponent,
    // ProductColumnComponent,
    ProductAccordianComponent,
    // ProductLeftImageComponent,
    // ProductRightImageComponent,
    // ProductVerticalTabComponent,
    // RelatedProductsComponent,
    // SidebarComponent,
    CategoriesComponent,
    QuickViewComponent,
    NewProductComponent,
    SearchComponent,
    ProductCompareComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent
  ]
})
export class ShopModule { }
