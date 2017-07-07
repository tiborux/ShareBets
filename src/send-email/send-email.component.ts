import { Component, OnInit } from '@angular/core';
import { UserService } from "services/user.service";
import { Bet } from "models/bet";
import { Router } from "@angular/router";
import { User } from "models/user";
@Component({
    selector: 'send-email',
    templateUrl: 'send-email.component.html',
    styleUrls: ['./send-email.component.css'],
})

export class SendEmailComponent{
    url: string;
    email: string;
    exito: boolean;
    url_email: string;
constructor(private userService: UserService,private router: Router){
    this.exito=false;
    this.url = "http://localhost:3000/reset";
}
    sendEmail(event):void{
        let user= new User("","",this.email,"","","");
        this.userService.sendEmail(this.url,user).subscribe(this.sucess.bind(this), this.error);
    }
     sucess(respuesta) {  
         this.exito=!this.exito;
            setTimeout(() => 
        {
            this.router.navigate(['/app/inicio']);
        },
            3000);
         
    }
    sucessCorreo(respuesta) {
        console.log(respuesta);
    }

    error(respuesta) {
        console.log(respuesta);
    }

}