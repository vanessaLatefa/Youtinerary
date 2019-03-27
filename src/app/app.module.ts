import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {HomeListComponent} from './home/home-list/home-list.component';
import {MaterialModule } from './material/material';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CKEditorModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
