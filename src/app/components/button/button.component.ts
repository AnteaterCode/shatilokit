import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { COLORS_PALETTE_ATTRIBUTES } from '../core/common/color';

export type ShButtonType = 'primary' | 'default' | 'danger' | 'link' | 'text' | null;

const BUTTON_HOST_ATTRIBUTES = [
  'sh-button'
];

@Component({
  selector: 'button[shButton]',
  exportAs: 'shButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShButton implements OnInit {
  @Input()
  loading = false;
  @Input() disabled: boolean = false;
  private loading$ = new Subject<boolean>();
  // tslint:disable-next-line:variable-name
  private _elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
   this._elementRef = elementRef;

   for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(attr);
      }
    }

   elementRef.nativeElement.classList.add('sh-button-base');
   console.log(this._getHostAttribute('color'));
   const pallete = this._getHostAttribute('color');
   elementRef.nativeElement.classList.add(`sh-${pallete}`);
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  // tslint:disable-next-line:typedef
  _getHostAttribute(name: string) {
    return this._getHostElement().getAttribute(name);
  }

  // tslint:disable-next-line:typedef
  _getHostElement() {
    return this._elementRef.nativeElement;
  }

}
