import { Directive, OnInit, Input, Optional, Self, Renderer2, ElementRef, TemplateRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[sh-input]',
  exportAs: 'shInput',
})
export class ShInputDirective implements OnInit {


  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value != null && `${value}` !== 'false';
  }
  _disabled = false;

  constructor(@Optional() @Self() public ngControl: NgControl, renderer: Renderer2, elementRef: ElementRef) {
    renderer.addClass(elementRef.nativeElement, 'sh-input');
  }

  ngOnInit() {
  }

}
