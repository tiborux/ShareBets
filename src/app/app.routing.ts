import { ContentHomeComponent } from './../content-home/content-home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import { RegisterFormComponent } from './../register-form/register-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ContentBetComponent } from "content-bet/content-bet.component";
import { AuthGuard } from './auth.guard';
import { CreateBetComponent } from "create-bet/create-bet.component";
import { ProfileComponent } from "profile/profile.component";
import { HistoryComponent } from "history/history.component";
import { ChangePasswordComponent } from "change-password/change-password.component";
import { SendEmailComponent } from "send-email/send-email.component";
import { DetailsBetComponent } from "details-bet/details-bet.component";

export const routes:Routes=[
  { path: 'app',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: ContentHomeComponent},
      { path: 'register', component: RegisterFormComponent },
      { path: 'bets', component: ContentBetComponent, canActivate: [AuthGuard] },
      { path: 'create.bet', component: CreateBetComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
      { path: 'reset', component: SendEmailComponent},
      { path: 'forgot', component: ChangePasswordComponent},
       { path: 'details.bet', component: DetailsBetComponent, canActivate: [AuthGuard] },
       { path: 'updatepay', component: DetailsBetComponent, canActivate: [AuthGuard] },
    ]},
      { path: '**', redirectTo:'/app/inicio',pathMatch: 'full' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
