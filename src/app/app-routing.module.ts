import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from '../app/cmponents/page/about/about.component'
import { HomeComponent } from './cmponents/home/home.component';
import { ProjectComponent } from './cmponents/page/project/project.component';
import { ContactComponent } from './cmponents/page/contact/contact.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'project',component:ProjectComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
