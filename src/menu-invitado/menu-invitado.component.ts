import { Component, Output, EventEmitter } from '@angular/core';

@Component({ 
    selector: 'menu-invitado',
    templateUrl: 'menu-invitado.component.html',
    styles: [`
     .ui.buttons .button{
      margin-left: 1em;
      border-top-left-radius: .28571429rem;
      border-bottom-left-radius: .28571429rem;
      border-top-right-radius: .28571429rem;
      border-bottom-right-radius: .28571429rem;
    }
`]
})
export class MenuInvitadoComponent {

    @Output()
    public notify:EventEmitter<boolean> = new EventEmitter<boolean>();
    
    hiddeLogin():void{
        this.notify.emit(false);
    }
}
