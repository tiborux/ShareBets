import { Component,  Input } from '@angular/core';

@Component({
    selector: 'animated-item',
    templateUrl: 'animated-item.component.html'
})

export class AnimatedItemComponent {
@Input()
    usuarios: any[] = [];
}