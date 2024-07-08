import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListPage } from './users-list/users-list.page';
import { UsersFormPage } from './user-form/users-form.page';

const routes: Routes = [
  {
    path: '',
    component: UsersListPage,
  },
  {
    path: 'userform',
    component: UsersFormPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
