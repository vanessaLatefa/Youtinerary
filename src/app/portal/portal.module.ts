import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalListComponent } from './portal-list/portal-list.component';
import { CreateComponent } from './create/create.component';
import { MaterialModule} from '../material/material';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [PortalListComponent, CreateComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class PortalModule { }
