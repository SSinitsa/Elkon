import {HomeComponent} from "../home/home.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccessDeniedComponent} from "../access-denied/access-denied.component";
import {LoaderComponent} from "../loader/loader.component";
import {CatalogComponent} from "../catalog/catalog.component";
import {ScreenAlertComponent} from "../screen-alert/screen-alert.component";
import {BrandDetailsComponent} from "../brand-details/brand-details.component";
import {VendorDetailsComponent} from "../vendor-details/vendor-details.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'alert', component: ScreenAlertComponent},
  {path: 'loader', component: LoaderComponent},
  {path: 'assets', component: AccessDeniedComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'product-brands/info/:brand', component: BrandDetailsComponent},
  {path: 'vendor-brands/info/:vendor', component: VendorDetailsComponent},
  {path: '**', component: AccessDeniedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {
}
