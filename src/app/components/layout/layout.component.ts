import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sh-layout',
  exportAs: 'shLayout',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: ` <ng-content></ng-content> `,
  host: {
    '[class.sh-layout]': 'true'
  }
})
export class ShLayoutComponent {
}
