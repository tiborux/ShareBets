import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "services/user.service";
import { User } from "models/user";
import { Router } from "@angular/router";
@Component({
    selector: 'user-pay',
    templateUrl: 'user-pay.component.html',
    styleUrls: ['./user-pay.component.css'],

})

export class UserPayComponent implements OnInit {
 
    @Input() user: User;
    url_pay: string;
   url_me:string;
   pagado: boolean;
   user_id:number;
   url_earnings:string;
    constructor(private userService: UserService, private router: Router) {
        this.url_pay = 'http://localhost:3000/bets/pay/';
        this.url_me = 'http://localhost:3000/users/';
         this.url_earnings = 'http://localhost:3000/bets/earnings/';
    }
    ngOnInit(): void {
        this.userService.getUser(this.url_me+this.user.usuario).subscribe((usuario) =>
        {
    
            this.userService.getHistory(this.url_earnings+this.userService.getIdbet()+"/"+usuario.id).subscribe(this.exito.bind(this), this.error);
        } 
        , this.error);
       
    }  
    pagar(event): void {
        this.userService.getUser(this.url_me+this.user.usuario).subscribe(this.sucessMe.bind(this), this.error);

    }
    exito(respuesta){
        if(respuesta.beneficio){
            this.pagado=true;
        }
    }
    sucessMe(respuesta) {
        this.user_id = respuesta.id;
        console.log(this.user_id);
        let token = localStorage.getItem('token');
        window.open("https://www.sandbox.paypal.com/cgi-bin/webscr?business=" + this.user.paypal
            + "&cmd=_xclick&currency_code=EUR&amount=" + this.userService.getBeneficio()+ "&item_name=Pago+de+boleto+de+apuesta&return=http://www.localhost:4200/app/updateearnings/?id="
            + this.userService.getIdbet()+ "||" + this.user_id + "||" + token + "&cancel_return=http://www.localhost:4200/app/updateearnings/?error=error&notify_url=http://www.localhost:3000/bets/pay/"
            , "PopupWindow", "width=600,height=600");

    }
    successPay(respuesta) {
        console.log(respuesta);

    }
    error(respuesta) {
        console.log(respuesta);
    }
}