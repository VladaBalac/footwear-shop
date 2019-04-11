import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from '../dina/log-in/log-in.component';
import { HomeComponent } from '../dina/home/home.component';

export const r :Routes = [
{path: 'login', component : LogInComponent},
{path: 'home', component: HomeComponent},
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
