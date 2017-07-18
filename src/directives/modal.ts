import { Directive, OnInit, OnDestroy, ElementRef } from "@angular/core";

declare var $: any

@Directive({
    selector: '.ui.basic.modal'
})
export class InitializeModal implements OnInit, OnDestroy {

    constructor(private el: ElementRef) {
    }

    public ngOnInit() {

    }
    public show(close,color) {
        $('.ui.modal')
            .modal({
                inverted: color,
                blurring: true,
                closable  : close
            })
            .modal('show')
            ;
    }

    public hide() {
        $('.ui.modal').modal('hide').modal('hide dimmer');
    }
    public ngOnDestroy() {
        $('.ui.modal').remove();
    }
}