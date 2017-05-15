import { User } from './../models/user';
import { UserService } from '../services/user.service';
import { Component, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Login} from "../models/login";

@Component({
    selector: 'register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.css']
})
export class RegisterFormComponent {

    messageSuccess = false;
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router) { }
    usuario: string;
    password: string;
    email: string;
    nombre: string;
    apellidos: string;
    checked: boolean;

    url: string = 'http://localhost:3000/users';

    sucess(respuesta) {

        this.messageSuccess = !this.messageSuccess;
        setTimeout(() => 
        {
            this.userService.setLogin(this.usuario,this.password);
            this.router.navigate(['/app/login']);
        },
            3000);
    }

    error(respuesta) {
        console.log(respuesta);
    }

    registerUser(event: any) {
        event.preventDefault();
        var user = new User(this.usuario, this.password, this.email, this.nombre, this.apellidos);
        this.userService.registerUser(this.url, user).subscribe(this.sucess.bind(this), this.error);
    }
}
