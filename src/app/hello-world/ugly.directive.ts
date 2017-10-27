import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[ugly]'
})
export class UglyDirective {
    constructor(elem: ElementRef) {
        elem.nativeElement.style.fontFamily = 'Comic Sans MS';
        elem.nativeElement.style.color = 'blue';
    }
}