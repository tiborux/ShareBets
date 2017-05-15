// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { RegisterFormComponent } from './register-form.component';
import { RegisterSuccessMessageComponent } from "messages/register-success.component";

@NgModule({
    imports: [
        RegisterSuccessMessageComponent
    ],
    declarations: [
        RegisterFormComponent,
    ],
    exports: [
        RegisterFormComponent,
    ]
})
export class RegisterFormModule {

}
