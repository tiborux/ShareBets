import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router } from "@angular/router";

@Component({
    selector: 'create-bet',
    templateUrl: 'create-bet.component.html',
    styleUrls: ['./create-bet.component.css'],
})

export class CreateBetComponent {

    constructor(private userService: UserService,private router:Router) { }
    url: string = 'http://localhost:3000/bets/new';
    titulo: string;
    coste: number;

    createBet(event: any) {
        event.preventDefault();
        var bet = new Bet(null,this.titulo,null,this.coste,0,null,true);
        this.userService.createBet(this.url,bet).subscribe(this.sucess.bind(this), this.error);
    }
    sucess(respuesta){
            this.router.navigate(['/app/bets']);
    }

    error(respuesta) {
        console.log(respuesta);
    }
}