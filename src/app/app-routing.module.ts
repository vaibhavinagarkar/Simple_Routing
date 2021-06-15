import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component'
import { UserdetailsComponent } from './userdetails/userdetails.component'
import { InfoComponent } from './info/info.component'


const routes: Routes = [
  {
  path: 'user',
  component: UserComponent
  },
  {
  path: 'userdetails',
  component: UserdetailsComponent
  },
  {
  path: 'info',
  component : InfoComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
