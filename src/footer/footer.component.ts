import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styles: [`
    .ui.footer{
        background: #263238;
        color: #fff;
        position:absolute;
   bottom:0
    height:25em;
    width:100%;
    }
`]
})
export class FooterComponent {

}
