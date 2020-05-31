import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './_directives/alert.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import {AuthenticationService} from './_services/api/authentication.service';
import {UserService} from './_services/api/user.service';
import {JwtInterceptor} from './_helpers/interceptors/jwt.interceptor';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CategoryComponent} from './components/category/category.component';
import {OrderComponent} from './components/order/order.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {CustomUrlPrefixInterceptor} from './_helpers/interceptors/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    OrderComponent,
    CategoryListComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
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
