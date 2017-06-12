import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
@Component({
    selector: 'history',
    templateUrl: 'history.component.html',
    styleUrls: ['./history.component.css'],
})

export class HistoryComponent implements OnInit{

    url: string;
    bets = [];
    
    constructor(private userService: UserService) {
        this.url = 'http://localhost:3000/bets/history';
        
    }
    
    ngOnInit(): void {
        this.userService.getHistory(this.url).subscribe(this.sucess.bind(this), this.error);
    }
    sucess(respuesta) {
        for (let data of respuesta) {
            let bet = new Bet(data.id, data.titulo, this.getDate(data.createdAt), data.coste, data.beneficio,0,null);
            this.bets.push(bet);
        }
        console.log(this.bets);
    }

    error(respuesta) {
        console.log(respuesta);
    }
    getDate(fecha): string {
        var date = new Date(fecha); // had to remove the colon (:) after the T in order to make it work
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var seconds = date.getSeconds();
        var myFormattedDate = day + "-" + monthIndex + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
        return myFormattedDate;
    }

}