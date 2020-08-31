import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs';

export type ShButtonType = 'primary' | 'default' | 'danger' | 'link' | 'text' | null;

@Component({
  selector: 'button[shButton]',
  exportAs: 'shButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShButton implements OnInit {
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  private loading$ = new Subject<boolean>();

  constructor() {
    console.log(111);
  }

  ngOnInit() {
  }

}
