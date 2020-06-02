import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './_directives/alert.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import {AuthenticationService} from './_services/api/authentication.service';
import {UserApiService} from './_services/api/user-api.service';
import {JwtInterceptor} from './_helpers/interceptors/jwt.interceptor';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CategoryComponent} from './components/category/category.component';
import {OrderComponent} from './components/order/order.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {CustomUrlPrefixInterceptor} from './_helpers/interceptors/http.interceptor';
import {CustomSearchPipe} from './_pipes/custom-search.pipe';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CategoryApiService} from './_services/api/category-api.service';
import {CategoryProductsComponent} from './components/category-products/category-products.component';
import {CategoryService} from './_services/category.service';
import {ProductApiService} from './_services/api/product-api.service';
import {ProductService} from './_services/product.service';
import {OrderPaymentMethodComponent} from './components/order-payment-method/order-payment-method.component';
import {OrderService} from './_services/order.service';
import {OrderInvoiceComponent} from './components/order-invoice/order-invoice.component';
import {OrderApiService} from './_services/api/order-api.service';
import {InvoiceModalComponent} from './components/invoice-modal/invoice-modal.component';
import {ProductOrderApiService} from './_services/api/product-order-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,

    InvoiceModalComponent,
    OrderPaymentMethodComponent,
    OrderComponent,
    CategoryListComponent,
    UserInfoComponent,
    NavbarComponent,
    CategoryProductsComponent,

    OrderInvoiceComponent,
    CustomSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserApiService,
    CategoryApiService,
    CategoryService,
    ProductApiService,
    ProductService,
    OrderService,
    OrderApiService,
    ProductOrderApiService,


    { provide: HTTP_INTERCEPTORS, useClass: CustomUrlPrefixInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
