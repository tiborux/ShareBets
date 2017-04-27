import { ContentHomeComponent } from './../content-home/content-home.component';
import { MenuRegisterComponent } from './../menu-register/menu-register.component';
import { FooterComponent } from './../footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgSemanticModule} from "ng-semantic";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuRegisterComponent,
    ContentHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
