import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Bet } from "models/bet";
import { UserService } from "services/user.service";
import { InitializeModal } from '../directives/modal'

@Component({
    selector: 'details-bet',
    templateUrl: 'details-bet.component.html',
    styleUrls: ['./details-bet.component.css'],
    providers: [InitializeModal]
})

export class DetailsBetComponent {
    coste: number;
    beneficio: number;
    url: string;
    url_estado: string;
    image64: string;
    foto: string;
    constructor(private userService: UserService, private router: Router, private modal: InitializeModal) {
        this.url = 'http://localhost:3000/bets/';
        this.url_estado = 'http://localhost:3000/bets/end/';
    }
    updateApuesta() {

        this.userService.updateBet(this.url, { id: this.userService.getIdbet(), coste: this.coste, beneficio: this.beneficio, foto: this.foto }).subscribe(this.success.bind(this), this.error);
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
    error(respuesta) {
        console.log(respuesta);
    }
    endBet(event): void {
        this.modal.show(true, false);
    }

    confirm(event): void {
        this.userService.endBet(this.url_estado, { id_apuesta:  this.userService.getIdbet(), estado: 3 }).subscribe(this.successDelete.bind(this), this.error);
    }
    successDelete(respuesta) {
        this.modal.hide();
        this.modal.ngOnDestroy();
        this.router.navigate(['/app/bets']);
    }

}