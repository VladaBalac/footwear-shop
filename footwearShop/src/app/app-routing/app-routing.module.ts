import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from '../dina/log-in/log-in.component';
import { HomeComponent } from '../dina/home/home.component';
import { BuyProductComponent } from '../dina/buy-product/buy-product.component';
import { RegisterComponent } from '../dina/register/register.component';
import { ProductComponent } from '../dina/product/product.component';

export const r :Routes = [
{path: 'login', component : LogInComponent},
{path: 'product/login', component : LogInComponent},
{path: 'home', component: HomeComponent},
{path: 'buy', component: BuyProductComponent},
{path: 'register', component: RegisterComponent},
{path: 'product', component: ProductComponent},
{path: '',  redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(r)
  ],

  exports: [
  	RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
