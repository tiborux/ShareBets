import { User} from './../models/user';
import { RegisterService } from './register.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
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
        console.log(user);
        this.registerService.addUser(user).subscribe();
    }
}
