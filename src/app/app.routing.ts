import { ContentHomeComponent } from './../content-home/content-home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import { RegisterFormComponent } from './../register-form/register-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ContentBetComponent } from "content-bet/content-bet.component";

export const routes:Routes=[
  { path: 'app',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: ContentHomeComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: 'apuestas', component: ContentBetComponent}
    ]},
      { path: '', redirectTo:'/app/inicio',pathMatch: 'full' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
