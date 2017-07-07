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
    url_me: string;
    pagado: boolean;
    administrador: boolean;
    id: number;
    user_id: number;
    fecha_apuesta: string;
    fecha_expires: string;
    unido: boolean;
    pago: boolean;
    constructor(private userService: UserService, private router: Router) {
        
        this.url_pay = 'http://localhost:3000/bets/pay/';
        this.url_estado = 'http://localhost:3000/bets/status/';
        this.url_me = 'http://localhost:3000/users/me/';
        this.userService.myPagado$.subscribe((newBool: boolean) => {
            this.pagado = newBool;
            this.pago = newBool
        });

    }
    ngOnInit(): void {
        this.fecha_apuesta = this.formatDate(this.bet.fecha_apuesta);
        this.fecha_expires = this.formatDate(this.bet.fecha_expires);

        if (this.bet.administrador) {
            this.administrador = true;
            this.unido = true;
            this.pagado = true;
            this.pago = true;
        }
        else {
            if (this.bet.pagado) {
                this.pagado = true;
                this.pago = true;
            }
            else if (this.bet.pagado == null && this.bet.coste == 0) {
                this.pago = true;
            }
            else if (this.bet.coste > 0) {
                this.pago = false;
            }

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
                break;
            }
        }

    }
    administrar(event): void {
        this.router.navigate(['/app/details.bet']);
        this.userService.setIdBet(this.bet.id);
    }
    pagar(event): void {
        this.userService.getMe(this.url_me).subscribe(this.sucessMe.bind(this), this.error);

    }
    unirse(event): void {
        this.unido = !this.unido;
        this.userService.updateEstado(this.url_estado, { id_apuesta: this.bet.id, estado: 1 }).subscribe(this.successPay.bind(this), this.error);
    }
    sucessMe(respuesta) {
        this.user_id = respuesta.id;
        let token = localStorage.getItem('token');
        window.open("https://www.sandbox.paypal.com/cgi-bin/webscr?business=" + this.bet.direccion_paypal
            + "&cmd=_xclick&currency_code=EUR&amount=" + this.bet.coste + "&item_name=Pago+de+boleto+de+apuesta&return=http://www.localhost:4200/app/updatepay/?id="
            + this.bet.id + "||" + this.user_id + "||" + token + "&cancel_return=http://www.localhost:4200/app/updatepay/?error=error&notify_url=http://www.localhost:3000/bets/pay/"
            , "PopupWindow", "width=600,height=600");

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