import { NgModule } from '@angular/core';
import { PortalListComponent } from './portal-list/portal-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: PortalListComponent
  },
    

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
