import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'content-home',
    templateUrl: 'content-home.component.html',
    styleUrls: ['./content-home.component.css'],
})
export class ContentHomeComponent {
    constructor(private router: Router){}
start(event):void{
     this.router.navigate(['/app/register']);
}
}
