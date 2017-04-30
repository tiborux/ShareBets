import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
styles: [`
    body {
      background-color: #DADADA;
    }
    body > .grid {
      height: 100%;
    }
    .column {
      margin-top:17em;
      margin-bottom:20em;
      max-width: 40em;
    }
  `]
})
export class LoginComponent {

}
