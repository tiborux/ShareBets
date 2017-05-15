import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";

@Component({
    selector: 'menu-invitado',
    templateUrl: 'menu-invitado.component.html',
    styleUrls: ['./menu-invitado.component.css']
})
export class MenuInvitadoComponent implements OnInit {

    login: boolean;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.isLogged$.subscribe(message => this.login = message);
    }

}
