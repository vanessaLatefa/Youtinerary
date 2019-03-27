import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  imports: [
    CommonModule,
    //material
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    
    UserRoutingModule
  ]
})
export class UserModule { }
