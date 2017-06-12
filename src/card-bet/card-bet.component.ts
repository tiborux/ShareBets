import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router } from "@angular/router";
@Component({
    selector: 'card-bet',
    templateUrl: 'card-bet.component.html',
    styleUrls: ['./card-bet.component.css']
})

export class CardBetComponent implements OnInit {
  
    @Input() bet: Bet;
    url_pay: string;
    pagado: boolean;
    id: number;
    constructor(private userService: UserService) {
        this.url_pay = 'http://localhost:3000/bets/pay/';
    }
  ngOnInit(): void {
      if(this.bet.pagado){   
          this.pagado=true;
      }

    }
    pagar(event): void {
        this.pagado = !this.pagado;
        this.userService.updatePago(this.url_pay, { id_apuesta: this.bet.id, pago: true }).subscribe(this.successPay.bind(this), this.error);
    }
    successPay(respuesta) {
        console.log(respuesta);
    }
    error(respuesta) {
        console.log(respuesta);
    }

}