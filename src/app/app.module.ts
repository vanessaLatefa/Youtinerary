import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule } from './material/material';
import {HomeListComponent} from './home/home-list/home-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent, 
    HomeListComponent,
    HomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HomeListComponent,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
