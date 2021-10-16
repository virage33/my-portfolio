import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './cmponents/navbar/navbar.component';
import {HomeComponent} from './cmponents/home/home.component';
import { AboutComponent } from './cmponents/page/about/about.component';
import { ContactComponent } from './cmponents/page/contact/contact.component';
import { ProjectComponent } from './cmponents/page/project/project.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
