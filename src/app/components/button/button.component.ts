import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

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
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  // tslint:disable-next-line:typedef
  _getHostElement() {
    return this._elementRef.nativeElement;
  }

}
