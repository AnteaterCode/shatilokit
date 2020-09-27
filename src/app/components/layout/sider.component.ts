import { Platform } from '@angular/cdk/platform';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sh-sider',
  exportAs: 'shSider',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="sh-layout-sider-children">
      <ng-content></ng-content>
    </div>
  `,
  host: {
  }
})
export class ShSiderComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {

  updateStyleMap(): void {
    this.cdr.markForCheck();
  }

  updateMenuInlineCollapsed(): void {

  }

  setCollapsed(collapsed: boolean): void {

  }

  constructor(private platform: Platform, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterContentInit(): void {

  }

  ngOnDestroy(): void {

  }
}
