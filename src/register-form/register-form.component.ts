import { User} from './../models/user';
import { RegisterService } from './register.service';
import { Component } from '@angular/core';

@Component({
    selector: 'register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.css']
})
export class RegisterFormComponent {
    constructor(private registerService: RegisterService) { }
    usuario: string;
    password: string;
    email: string;
    nombre: string;
    apellidos: string;
    checked: boolean;

//Registramos un usuario llamando al servicio

    registerUser(){
        var user = new User(this.usuario, this.password, this.email, this.nombre, this.apellidos);
        this.registerService.registerUser(user);
    }
}
