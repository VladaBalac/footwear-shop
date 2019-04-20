import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ServisService } from './dina/service/servis.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LogInComponent } from './dina/log-in/log-in.component';
import { HomeComponent } from './dina/home/home.component';
import { ProductComponent } from './dina/product/product.component';
import { RegisterComponent } from './dina/register/register.component';
import { BuyProductComponent } from './dina/buy-product/buy-product.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponent,
    HomeComponent,
    ProductComponent,
    RegisterComponent,
    BuyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
