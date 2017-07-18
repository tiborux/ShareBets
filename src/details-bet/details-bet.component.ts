import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Bet } from "models/bet";
import { User } from "models/user";
import { UserService } from "services/user.service";
import { InitializeModal } from '../directives/modal'

@Component({
    selector: 'details-bet',
    templateUrl: 'details-bet.component.html',
    styleUrls: ['./details-bet.component.css'],
    providers: [InitializeModal]
})

export class DetailsBetComponent implements OnInit {

    coste: number;
    beneficio: number;
    url: string;
    url_estado: string;
    image64: string;
    foto: string;
    url_bet: string;
    url_user: string;
    url_me: string;
    url_pay: string;
    user_id: number;
    users = [];
    me: string;
    modalshow: boolean;

    constructor(private userService: UserService, private router: Router, private modal: InitializeModal) {
        this.url = 'http://localhost:3000/bets/';
        this.url_bet = 'http://localhost:3000/bets/bet/';
        this.url_estado = 'http://localhost:3000/bets/end/';
        this.url_user = 'http://localhost:3000/bets/users/';
        this.url_me = 'http://localhost:3000/users/me';

    }
    ngOnInit(): void {
        this.userService.getBet(this.url_bet + this.userService.getIdbet()).subscribe(this.successBet.bind(this), this.error);
        this.userService.getUsersBet(this.url_user + this.userService.getIdbet()).subscribe(this.sucessGetUsers.bind(this), this.error);
    }
    sucess(respuesta) {

        this.me = respuesta.usuario;
    }

    updateApuesta() {
        if (this.foto != null) {
            this.userService.updateBet(this.url, {
                id: this.userService.getIdbet(), coste: this.coste,
                beneficio: this.beneficio, foto: this.foto
            }).subscribe(this.success.bind(this), this.error);
        }
        else {
            this.userService.updateBet(this.url, {
                id: this.userService.getIdbet(), coste: this.coste,
                beneficio: this.beneficio
            }).subscribe(this.success.bind(this), this.error);
        }

    }
    setFoto(event) {
        const foto = new Blob([event.target.files[0]]);
        var reader = new FileReader();
        reader.readAsDataURL(foto);
        reader.onloadend = () => {
            this.foto = reader.result;
        }
    }

    success(respuesta) {
        this.router.navigate(['/app/bets']);
    }
    successBet(respuesta) {
        this.coste = respuesta.coste;
        this.beneficio = respuesta.beneficio;
        this.userService.setBeneficio(this.beneficio);
    }
    sucessGetUsers(data) {
        for (var i = 0; i < data.usuarios.length; i++) {
            let user = new User(data.usuarios[i], "", "", "", "", data.emails[i]);
            this.users.push(user);

        }
        console.log(this.users);
    }

    error(respuesta) {
        console.log(respuesta);
    }
    endBet(event): void {
        if (confirm("¿Estas seguro de que quieres finalizar la apuesta?")) {
        this.userService.endBet(this.url_estado, { id_apuesta: this.userService.getIdbet(), estado: 3 }).subscribe(this.successDelete.bind(this), this.error);
    }
    }

    successDelete(respuesta) {
        this.modal.hide();
        this.modal.ngOnDestroy();
        this.router.navigate(['/app/bets']);
    }

}