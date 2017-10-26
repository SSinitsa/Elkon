import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CatalogComponent} from './catalog/catalog.component';
import {NewsComponent} from './news/news.component';
import {RoutingModule} from './module/routing.module';
import {NavigationComponent} from './navigation/navigation.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SocialComponent} from './social/social.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MainBannerComponent} from './main-banner/main-banner.component';
import {MaterialDesignModule} from "./module/material-design.module";
import {LoaderComponent} from './loader/loader.component';
import {BannerService} from "./service/banner.service";
import {LoaderService} from "./service/loader.service";
import {MailService} from "./service/mail.service";
import {HttpModule} from "@angular/http";
import { ScreenAlertComponent } from './screen-alert/screen-alert.component';
import { ProductBrandsComponent } from './product-brands/product-brands.component';
import { VendorBrandsComponent } from './vendor-brands/vendor-brands.component';
import {DataService} from "./service/data.service";
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    NewsComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SocialComponent,
    ContactUsComponent,
    AccessDeniedComponent,
    MainBannerComponent,
    LoaderComponent,
    ScreenAlertComponent,
    ProductBrandsComponent,
    VendorBrandsComponent,
    BrandDetailsComponent,
    VendorDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpModule,
    HttpClientModule,
    MaterialDesignModule
  ],
  providers: [
    BannerService,
    MailService,
    DataService,
    {provide: 'loaderService', useClass: LoaderService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
