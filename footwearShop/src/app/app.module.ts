import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LogInComponent } from './dina/log-in/log-in.component';
import { HomeComponent } from './dina/home/home.component';
import { ProductComponent } from './dina/product/product.component';
import { RegisterComponent } from './dina/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponent,
    HomeComponent,
    ProductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
