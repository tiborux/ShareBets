import { Component, OnInit, Input } from '@angular/core';
import { User } from "models/user";
import { UserService } from "services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) { }
    usuario: string;
    password: string;
    url_base: string = 'http://localhost:3000/login';

    ngOnInit() {
        this.usuario = this.userService.getLogin().usuario;
        this.password = this.userService.getLogin().password;
    }
    sucess(respuesta) {
        localStorage.setItem('token', respuesta.token);
        this.userService.setLogged(true);
        this.router.navigate(['/app/apuestas']);
    }

    error(respuesta) {
        console.log(respuesta);
    }

    login(event: any) {
        event.preventDefault();
        var user = new User(this.usuario, this.password, "", "", "");
        this.userService.loginUser(this.url_base, user).subscribe(this.sucess.bind(this), this.error);
    }

}
