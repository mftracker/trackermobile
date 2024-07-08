import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { UsersListPage } from './users-list/users-list.page';
import { UsersFormPage } from './user-form/users-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage, 
    UsersListPage,
    UsersFormPage,
  ]
})
export class HomeModule {}
