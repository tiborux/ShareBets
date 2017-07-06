import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    login: boolean;

    constructor(private userService: UserService,private router: Router) {
        this.userService.myBool$.subscribe((newBool: boolean) => { this.login = newBool; });
     }

    //Observable que se actualiza cuando le avisas.
    ngOnInit() {
        if(localStorage.getItem('token')){
            this.login=true;
            this.userService.setMyBool(true);
            this.router.navigate(['/app/bets']);
        }
       
    }

    logout(event) {
        this.userService.setMyBool(false);
        this.login=false;
        this.userService.logoutUser();
    }

}
