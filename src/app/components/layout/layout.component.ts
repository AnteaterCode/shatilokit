import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, QueryList, ContentChildren } from '@angular/core';
import { ShSiderComponent } from './sider.component';

@Component({
  selector: 'sh-layout',
  exportAs: 'shLayout',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: ` <ng-content></ng-content> `,
  host: {
    '[class.sh-layout-has-sider]': 'listOfShSiderComponent.length > 0',
    '[class.sh-layout]': 'true'
  }
})
export class ShLayoutComponent {
  @ContentChildren(ShSiderComponent) listOfShSiderComponent!: QueryList<ShSiderComponent>;
}
