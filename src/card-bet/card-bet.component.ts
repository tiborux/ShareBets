import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router } from "@angular/router";
@Component({
    selector: 'card-bet',
    templateUrl: 'card-bet.component.html',
    styleUrls: ['./card-bet.component.css'],
    
})

export class CardBetComponent implements OnInit {

    @Input() bet: Bet;
    url_pay: string;
    url_estado: string;
    pagado: boolean;
    administrador: boolean;
    id: number;
    fecha_apuesta: string;
    fecha_expires: string;
    unido: boolean;
    constructor(private userService: UserService, private router: Router) {
        this.url_pay = 'http://localhost:3000/bets/pay/';
        this.url_estado = 'http://localhost:3000/bets/status/';
    }
    ngOnInit(): void {
        this.fecha_apuesta = this.formatDate(this.bet.fecha_apuesta);
        this.fecha_expires = this.formatDate(this.bet.fecha_expires);
        if (this.bet.pagado) {
            this.pagado = true;
        }
        if (this.bet.administrador) {
            this.administrador = true;
            this.unido = true;
            this.pagado = true;
        }
        if (this.bet.coste > 0) {
            this.pagado = false;
        }

        switch (this.bet.estado) {
            case 0: {
                this.unido = false;
                break;
            }
            case 1: {
                this.unido = true;
                break;
            }
            case 2: {
                console.log("hola");
            }
        }

    }
    administrar(event): void {
        this.router.navigate(['/app/details.bet']);
        this.userService.setIdBet(this.bet.id);
    }
    pagar(event): void {
        this.pagado = !this.pagado;
        this.userService.updateEstado(this.url_pay, { id_apuesta: this.bet.id, pago: true }).subscribe(this.successPay.bind(this), this.error);
    }
    unirse(event): void {
        this.unido = !this.unido;
        this.userService.updateEstado(this.url_estado, { id_apuesta: this.bet.id, estado: true }).subscribe(this.successPay.bind(this), this.error);
    }

    successPay(respuesta) {
        console.log(respuesta);

    }
    error(respuesta) {
        console.log(respuesta);
    }

    formatDate(fecha) {
        var date = new Date(fecha);
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var seconds = date.getSeconds();
        let myFormattedDate = day + "-" + monthIndex + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
        return myFormattedDate;
    }
  
}