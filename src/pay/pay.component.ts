import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from "models/user";
import { UserService } from "services/user.service";
import { Router } from "@angular/router";
import { InitializeModal } from '../directives/modal'

@Component({
    selector: 'pay',
    templateUrl: 'pay.component.html',

})
export class PayComponent implements OnInit {
    url_pago: string;
    constructor(private userService: UserService, private router: Router) {
        this.url_pago = 'http://localhost:3000/bets/pay/';
    }
    ngOnInit(): void {
        var queryDict = {}
        location.search.substr(1).split("&").forEach(function (item) { queryDict[item.split("=")[0]] = item.split("=")[1] })
        console.log(queryDict);
        if (queryDict['error']) {
            window.close();
        }
        var id = queryDict['id'];
        var ids = id.split("%7C%7C");
        localStorage.setItem('token', ids[2]);
        this.userService.updatePago(this.url_pago, { id_apuesta: ids[0], id_usuario: ids[1], pagado: 1 }).subscribe(this.successPay.bind(this), this.error);
    }
    successPay(respuesta) {
        console.log(respuesta);
        this.userService.setpagado(true);
opener.location.href = '/app/bets';

        close();

    }
    error(respuesta) {
        console.log(respuesta);
    }

}
