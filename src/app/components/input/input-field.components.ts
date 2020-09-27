import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    QueryList,
    SimpleChanges,
    TemplateRef,
    ViewEncapsulation
  } from '@angular/core';

@Component({
    selector: 'sh-input-field',
    exportAs: 'shInputField',
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <span class='sh-input-field-wrapper'>
            <span *ngIf='shPrefix' class='sh-input-field-affix'>
                {{shPrefix}}
            </span>
            <ng-content></ng-content>
            <span class='sh-input-field-affix'>
                <ng-template [ngTemplateOutlet]="shSuffix"></ng-template>
            </span>
        </span>
    `
})
export class ShInputFieldComponent  {

  @Input() shPrefix?: string | TemplateRef<void>;
  @Input() shSuffix?: string | TemplateRef<void>;
}

