import { Directive, OnInit, OnDestroy, ElementRef } from "@angular/core";

declare var $: any

@Directive({
    selector: '.ui.dropdown'
})
export class InitializeDropdown implements OnInit {

    constructor(private el: ElementRef) {
    }

    public ngOnInit() {
        $('.ui.dropdown')
            .dropdown()
            ;
    }
    public getElement() {
        $('.dropdown').dropdown('get value');

    }
}