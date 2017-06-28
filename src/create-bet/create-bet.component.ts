import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router } from "@angular/router";
import { InitializeDropdown } from "directives/dropdown";

@Component({
    selector: 'create-bet',
    templateUrl: 'create-bet.component.html',
    styleUrls: ['./create-bet.component.css'],
    providers: [InitializeDropdown]
})

export class CreateBetComponent implements OnInit {

    constructor(private userService: UserService, private router: Router, private dropdown: InitializeDropdown) { }
    url: string = 'http://localhost:3000/bets/new';
    url_usuario: string = 'http://localhost:3000/users/';
    titulo: string;
    coste: number;
    paypal: string;
    fecha_expires: Date;
    fecha_apuesta: Date;
    time: Date;
    usuarios = [];
    id_usuarios = [];
    usuario: string;
    message: string;

    ngOnInit(): void {
        this.dropdown.ngOnInit();
    }
    createBet(event: any) {
        var bet = new Bet(null, this.titulo, null, 0, 0, null, true, null, this.fecha_expires, this.fecha_apuesta, this.paypal,this.id_usuarios);
        this.userService.createBet(this.url, bet).subscribe(this.sucess.bind(this), this.error);
    }
    sucess(respuesta) {
        this.router.navigate(['/app/bets']);
    }

    error(respuesta) {
        console.log(respuesta);
    }
    selection(apuesta) {
        this.titulo = apuesta;
    }
    // controller
    setFecha_Expires(dateString: Date): Date {
        if (dateString) {
            this.fecha_expires = dateString;
            var time = new Date();
            var date = this.fecha_expires.getFullYear() + "/" + (this.fecha_expires.getMonth() + 1) + "/" + this.fecha_expires.getDate() + " " + time.getHours() + ":"
                + time.getMinutes() + ":" + time.getSeconds();
            this.fecha_expires = new Date(date);
            return this.fecha_expires;
        }
    }
    setFecha_Apuesta(dateString: Date): Date {
        if (dateString) {
            this.fecha_apuesta = dateString;
            var time = new Date();
            var date = this.fecha_apuesta.getFullYear() + "/" + (this.fecha_apuesta.getMonth() + 1) + "/" + this.fecha_apuesta.getDate() + " " + time.getHours() + ":"
                + time.getMinutes() + ":" + time.getSeconds();
            this.fecha_apuesta = new Date(date);
            return this.fecha_apuesta;
        }
    }
    invitar(event) {
        if (this.usuario) {
            this.userService.getUser(this.url_usuario + this.usuario).subscribe(this.successUser.bind(this), this.errorUser);
        }
        else{
            this.message="Introduce un usuario";
        }
    }

    successUser(respuesta) {
        this.message="";
        if (respuesta.usuario) {
            if (!(this.usuarios.find(usuario => usuario.usuario === this.usuario))) {
                this.usuarios.push({ usuario: this.usuario });
                this.id_usuarios.push(respuesta.id);
            }
            else {
                this.message="El usuario ya ha sido invitado";
            }
        }
        else {
            this.message="No existe el usuario";
        }
    }

    errorUser(respuesta) {
        console.log(respuesta);
    }
}