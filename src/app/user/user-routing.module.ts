
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [

  {
    path:'', component: UserListComponent
  },
  {
    path:'info', component: UserCardComponent
  },
    

];
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class UserRoutingModule { }
