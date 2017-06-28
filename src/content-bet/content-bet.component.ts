import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router } from "@angular/router";
@Component({
    selector: 'content-bet',
    templateUrl: 'content-bet.component.html',
    styleUrls: ['./content-bet.component.css']
})

export class ContentBetComponent implements OnInit {
    constructor(private userService: UserService, private router: Router) { }
    url: string = 'http://localhost:3000/bets/me';
    url_user: string = 'http://localhost:3000/bets/users/';
    bets = [];
    count: number = 0;
    participantes: number;
    pagado: boolean
    ngOnInit() {
        this.userService.getBets(this.url).subscribe(this.sucess.bind(this), this.error);

    }

    sucess(respuesta) {

        for (let data of respuesta) {
            this.userService.getUsersBet(this.url_user + data.id).subscribe(this.sucessGetUsers.bind(this, data), this.error);
        }
    }

    sucessGetUsers(data, respuesta) {
        this.count = 0;
        for (let user of respuesta.usuarios) {
            this.count++;
            
        }
        var bet = new Bet(data.id, data.titulo, data.createdAt, data.coste, data.beneficio, this.count, data.usuarios_apuesta.administrador, data.usuarios_apuesta.pagado,null,null,null,null);
        this.bets.push(bet);

    }
    error(respuesta) {
        console.log(respuesta);
    }
    createBet() {
        this.router.navigate(['/app/create.bet']);
    }

    successPay(respuesta) {
        console.log(respuesta);
    }

}