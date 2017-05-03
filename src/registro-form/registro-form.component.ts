import { Usuario } from './../modelos/usuario';
import { RegistroService } from './registro.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
    selector: 'registro-form',
    templateUrl: 'registro-form.component.html',
    styleUrls: ['registro-form.component.css']
})
export class RegistroFormComponent {
    constructor(private registroService: RegistroService) { }
    usuario: string;
    password: string;
    email: string;
    nombre: string;
    apellidos: string;

//Registramos un usuario llamando al servicio
    registerUser(){
        var user = new Usuario(this.usuario, this.password, this.email, this.nombre, this.apellidos);
        this.registroService.addUser(user).subscribe();
    }
}
