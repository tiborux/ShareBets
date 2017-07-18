import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'content-bet',
    templateUrl: 'content-bet.component.html',
    styleUrls: ['./content-bet.component.css']
})

export class ContentBetComponent implements OnInit {
    constructor(private userService: UserService, private router: Router, private sanitizer: DomSanitizer) { }
    url: string = 'http://localhost:3000/bets/me';
    url_user: string = 'http://localhost:3000/bets/users/';
    bets = [];
    count: number = 0;
    participantes: number;
    pagado: boolean;
    foto: string;
    bet: boolean;
    image: SafeResourceUrl;
    ngOnInit() {
        this.userService.getBets(this.url).subscribe(this.sucess.bind(this), this.error);
        this.bet = true;
    }
    sucess(respuesta) {

        for (let data of respuesta) {
            this.userService.getUsersBet(this.url_user + data.id).subscribe(this.sucessGetUsers.bind(this, data), this.error);
        }
    }

    sucessGetUsers(data, respuesta) {
        this.bet = false;
        this.count = 0;
        for (let user of respuesta.usuarios) {
            this.count++;
        }
        if (data.foto) {
            this.image = this.sanitizer.bypassSecurityTrustResourceUrl(data.foto);
        }
        else {
            this.image = '/assets/apuesta-img.png';
        }
        if (data.usuarios_apuesta.estado != 3) {

            var bet = new Bet(data.id, data.titulo, data.createdAt, data.coste, data.beneficio, this.count,
                data.usuarios_apuesta.administrador, data.usuarios_apuesta.pagado, data.fecha_expires, data.fecha_apuesta, data.direccion_paypal, null, data.usuarios_apuesta.estado, this.image);
            this.bets.push(bet);
        }
        else {
            
            if(this.bets.length>1) {
                this.bet = false;
            }
            else {
                this.bet =true;
            }
        }
       
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