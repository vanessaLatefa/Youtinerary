import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeListComponent } from './home/home-list/home-list.component';



const routes: Routes = [

  {path: 'home', loadChildren: './home/home.module#HomeModule'},

  {path:'' ,redirectTo : '', pathMatch:'full'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
