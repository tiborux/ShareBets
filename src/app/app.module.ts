import { LoginComponent } from './../login/login.component';
import { ContentHomeComponent } from './../content-home/content-home.component';
import { MenuRegisterComponent } from './../menu-register/menu-register.component';
import { FooterComponent } from './../footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgSemanticModule} from "ng-semantic";
import {routing} from  './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuRegisterComponent,
    ContentHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
