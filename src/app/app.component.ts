import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
show:boolean=true;
  loginShow(show:boolean):void{
    this.show=show;

  }
}
