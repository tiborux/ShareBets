import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    login: boolean;

    constructor(private userService: UserService) { }

    //Observable que se actualiza cuando le avisas.
    ngOnInit() {
            this.userService.isLogged$.subscribe(res => {
                this.login = res;
            });   
    }

    logout(event) {
        this.userService.setLogged(false);
        this.userService.logoutUser();
    }

}
