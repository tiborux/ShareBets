// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LoginComponent } from './login.component';
import { RegisterFormComponent } from "register-form/register-form.component";

@NgModule({
    imports: [

    ],
    declarations: [
        LoginComponent,
        RegisterFormComponent,
    ],
    exports: [  
        LoginComponent,
    ]
})
export class LoginModule {

}
