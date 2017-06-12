import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "models/user";
@Component({
    selector: 'change-password',
    templateUrl: 'change-password.component.html',
    styleUrls: ['./change-password.component.css'],
})

export class ChangePasswordComponent implements OnInit {

    private accesstoken;
    private code;
    private url: string;
    private param: string;
    private password: string;
    private exito:boolean;
    private fallo:boolean;
    constructor(private router: Router, private userService: UserService) {
        this.param = router.parseUrl(router.url).queryParams["token"];
        this.url = 'http://localhost:3000/reset/' + this.param;
        this.exito=false;
        this.fallo=false;
    }
    ngOnInit(): void {
        this.userService.getByToken(this.url).subscribe(this.sucess.bind(this), this.error.bind(this));
        
    }

    private sucess(respuesta): void
    {
      console.log(respuesta);
    }

    private error(respuesta): void
    {
        this.fallo=!this.fallo;
        setTimeout(() => 
        {
            this.router.navigate(['/app/inicio']);
        },
        3000);
    }
    private sucessChangePassword(respuesta): void
    {
         this.exito=!this.exito;
         setTimeout(() => 
        {
            this.router.navigate(['/app/login']);
        },
        3000);
    }
    private changePassword(event):void
    {
        let user= new User("",this.password,"","","");
        this.userService.updatePassword(this.url,user).subscribe(this.sucessChangePassword.bind(this), this.error.bind(this));
    }
}