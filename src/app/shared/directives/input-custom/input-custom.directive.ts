import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[inputCustom]'
})
export class InputCustomDirective {

    constructor(
        private  _elementRef: ElementRef,
        private _renderer: Renderer2
    ) {
        this._renderer.addClass(this._elementRef.nativeElement, 'custom-input')
    }

}
