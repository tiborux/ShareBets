import { ContentHomeComponent } from './../content-home/content-home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

export const routes:Routes=[
 { path: 'login', component: LoginComponent },
  { path: 'inicio', component: ContentHomeComponent },
  { path: '', redirectTo:'inicio',pathMatch: 'full' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);