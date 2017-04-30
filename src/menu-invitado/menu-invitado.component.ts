import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'menu-invitado',
    templateUrl: 'menu-invitado.component.html',
    styleUrls: ['./menu-invitado.component.css']
})
export class MenuInvitadoComponent {

    @Output()
    public notify: EventEmitter<boolean> = new EventEmitter<boolean>();

    hiddeLogin(): void {
        this.notify.emit(false);
    }
}
