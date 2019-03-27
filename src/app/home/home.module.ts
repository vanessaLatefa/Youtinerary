import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import {MaterialModule} from '../material/material';

@NgModule({
  declarations: [HomeListComponent], 
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule

    
  ]
})
export class HomeModule { }
