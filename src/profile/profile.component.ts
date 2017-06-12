import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from "models/user";
import { UserService } from "services/user.service";
import { Router } from "@angular/router";
import { InitializeModal } from '../directives/modal'

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    providers: [InitializeModal]

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
    constructor(private userService: UserService, private router: Router, private modal: InitializeModal) {
        this.url = "http://localhost:3000/users/me";
        this.url_update = "http://localhost:3000/users/"
        this.is_edit = true;
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
    }
    successUpdate(respuesta) {
        console.log(respuesta);
    }
    error(error): void {
        console.log(error);
    }
    editUser(event): void {
        this.is_edit = !this.is_edit;
    }
    updateUser(event): void {
        var user = new User(this.usuario, "", this.email, this.nombre, this.apellidos);
        this.userService.updateUser(this.url_update + this.usuario, user).subscribe(this.successUpdate.bind(this), this.error);
        this.is_edit = !this.is_edit;
    }
    deleteUser(event): void {
        this.modal.show(true,false);
    }

    confirm(event): void {
        this.userService.deleteUser(this.url_update+this.usuario).subscribe(this.successDelete.bind(this), this.error);
    }
    successDelete(respuesta) {
        this.modal.hide();
        this.modal.ngOnDestroy();
        this.userService.setLogged(false);
        this.userService.logoutUser();
        this.router.navigate(['/app/inicio']);
    }
}
