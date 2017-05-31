import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from "models/user";
import { UserService } from "services/user.service";

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
    password: string;
    email: string;
    nombre: string;
    apellidos: string;
    usuario: string;
    url: string;
    url_update: string;
    is_edit: boolean;
    constructor(private userService: UserService) {
        this.url="http://localhost:3000/users/me";
        this.url_update="http://localhost:3000/users/"
        this.is_edit=true;
     }
    
    ngOnInit(): void {
        this.userService.getMe(this.url).subscribe(this.success.bind(this), this.error);
    }
    success(respuesta) {
        this.usuario = respuesta.usuario;
        this.password = respuesta.password;
        this.email = respuesta.email;
        this.nombre = respuesta.nombre;
        this.apellidos = respuesta.apellidos;
        console.log(respuesta);
    }
      successUpdate(respuesta) {
        console.log(respuesta);
    }
    error(error): void {
        console.log(error);
    }
    editUser(event): void{
        this.is_edit=!this.is_edit;
    }
    updateUser(event): void{
        var user = new User(this.usuario,"",this.email,this.nombre,this.apellidos);
        this.userService.updateUser(this.url_update+this.usuario,user).subscribe(this.successUpdate.bind(this), this.error);
    }
}
