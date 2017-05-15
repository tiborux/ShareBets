import { UserService } from './../services/user.service';
import { RegisterFormComponent } from './../register-form/register-form.component';
import { LoginComponent } from './../login/login.component';
import { ContentHomeComponent } from './../content-home/content-home.component';
import { MenuInvitadoComponent } from './../menu-invitado/menu-invitado.component';
import { FooterComponent } from './../footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from "ng-semantic";
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { HttpService } from "services/http.service";
import { RegisterSuccessMessageComponent } from "messages/register-success.component";

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    FooterComponent,
    MenuInvitadoComponent,
    ContentHomeComponent,
    LoginComponent,
    RegisterFormComponent,
    RegisterSuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    routing
  ],
  providers: [
    UserService,
    HttpService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
