import { Component, OnInit, Input } from '@angular/core';
import { User } from "models/user";
import { UserService } from "services/user.service";
import { Router } from "@angular/router";
import { InitializeModal } from "directives/modal";
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [InitializeModal]
})
export class LoginComponent implements OnInit {
    usuario: string;
    password: string;
    exito: boolean;
    transition: boolean;
    url_base: string = 'http://localhost:3000/login';
    constructor(private userService: UserService, private router: Router, private modal: InitializeModal) {
        this.exito = false;
        this.transition = true;
    }
    ngOnInit() {
        this.usuario = this.userService.getLogin().usuario;
        this.password = this.userService.getLogin().password;

    }
    sucess(respuesta) {
        this.modal.show(false,true);
        setTimeout(() => {
            this.modal.hide();
            this.modal.ngOnDestroy();
            localStorage.setItem('token', respuesta.token);
            this.userService.setLogged(true);
            this.router.navigate(['/app/bets']);
        },
            2000);
    }

    error(respuesta) {
        this.exito = !this.exito;
    }

    login(event: any) {
        event.preventDefault();
        var user = new User(this.usuario, this.password, "", "", "");
        this.userService.loginUser(this.url_base, user).subscribe(this.sucess.bind(this), this.error.bind(this));
    }

}
