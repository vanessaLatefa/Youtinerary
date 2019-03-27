import { NgModule } from '@angular/core';
import { PortalListComponent } from './portal-list/portal-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';

const routes: Routes = [

  {
    path: '', component: PortalListComponent
  },
  {
    path: 'create', component: CreateComponent
  },
    

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
