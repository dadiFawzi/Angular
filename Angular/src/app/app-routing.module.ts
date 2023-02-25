import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpfeComponent } from './addpfe/addpfe.component';
import { HomeComponent } from './home/home.component';
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"addpfe", component:AddpfeComponent},
  {path:"", component:HomeComponent},
  {path:"search",component:SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
