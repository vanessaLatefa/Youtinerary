import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [HomeListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeListComponent,
  ]
})
export class HomeModule { }
