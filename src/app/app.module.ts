import { UserService } from './../services/user.service';
import { RegisterFormComponent } from './../register-form/register-form.component';
import { LoginComponent } from './../login/login.component';
import { ContentHomeComponent } from './../content-home/content-home.component';
import { MenuComponent } from './../menu/menu.component';
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
import { ContentBetComponent } from "content-bet/content-bet.component";
import {AuthGuard} from './auth.guard';
import { CreateBetComponent } from "create-bet/create-bet.component";
import { ProfileComponent } from "profile/profile.component";
import { HistoryComponent } from "history/history.component";
import { ChangePasswordComponent } from "change-password/change-password.component";
import { SendEmailComponent } from "send-email/send-email.component";
import { InitializeModal } from "directives/modal";
import { CardBetComponent } from "card-bet/card-bet.component";
import { AnimatedItemComponent } from "animated-item-list/animated-item.component";
import { InitializeDropdown } from "directives/dropdown";
import { DetailsBetComponent } from "details-bet/details-bet.component";
import { PayComponent } from "pay/pay.component";
import { UserPayComponent } from "user-pay/user-pay.component";
import { PayEarningsComponent } from "pay-earnings/pay-earnings.component";

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    FooterComponent,
    MenuComponent,
    ContentHomeComponent,
    LoginComponent,
    RegisterFormComponent,
    ContentBetComponent,
    CreateBetComponent,
    ProfileComponent,
    HistoryComponent,
    ChangePasswordComponent,
    SendEmailComponent,
    InitializeModal,
    CardBetComponent,
    InitializeModal,
    AnimatedItemComponent,
    InitializeDropdown,
    DetailsBetComponent,
    PayComponent,
    UserPayComponent,
    PayEarningsComponent
    
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
    HttpService,
    AuthGuard
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }