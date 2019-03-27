import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material
import { MatTabsModule } from '@angular/material/tabs';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalListComponent } from './portal-list/portal-list.component';



@NgModule({
  declarations: [PortalListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
