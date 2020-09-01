import { Directive, OnDestroy, forwardRef, ExistingProvider, Input, ElementRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    ConnectionPositionPair,
    FlexibleConnectedPositionStrategy,
    Overlay,
    OverlayConfig,
    OverlayRef,
    PositionStrategy
  } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

import { AutocompleteComponent } from './autocomplete.component';


export const SH_AUTOCOMPLETE_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ShAutocompleteTriggerDirective),
    multi: true
  };


@Directive({
    selector: `input[shAutocomplete], textarea[shAutocomplete]`,
    exportAs: 'shAutocompleteTrigger',
    providers: [SH_AUTOCOMPLETE_VALUE_ACCESSOR],
    host: {
      autocomplete: 'off',
      '(input)': 'handleInput($event)',
      'aria-autocomplete': 'list'
    }
  })
  export class ShAutocompleteTriggerDirective implements ControlValueAccessor, OnDestroy {
    @Input() shAutocomplete!: AutocompleteComponent;

    private overlayRef: OverlayRef | null = null;
    private portal: TemplatePortal<{}> | null = null;
    private positionStrategy!: FlexibleConnectedPositionStrategy;


    constructor(
        private elementRef: ElementRef, // обертка над нативным элементом
        private overlay: Overlay, // сервис для всплывающих панелей
        private viewContainerRef: ViewContainerRef // Апи для создания новых вьюх у текущего компонента
    ) {}

    writeValue(value: any): void {
        Promise.resolve(null).then(() => this.setTriggerValue(value));
    }
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {

    }

    _onChange: (value: any) => void = () => {};
    _onTouched = () => {};

    private setTriggerValue(value: any): void {
        // устанавливаем значения в ng контрол и нативный элемент
    }

    handleInput(event: KeyboardEvent): void {
        console.log(event);
        const target = event.target as HTMLInputElement;
        // const document = this.document as Document;
        let value: number | string | null = target.value;

        if (target.type === 'number') {
          value = value === '' ? null : parseFloat(value);
        }
       // if (this.previousValue !== value) {
        //  this.previousValue = value;
       //   this.onChange(value);

       //   if (this.canOpen() && document.activeElement === event.target) {
        this.openPanel();
        //  }
       // }
    }

    openPanel(): void {
        // this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        // this.updateStatus();
    }

    private attachOverlay(): void {
        console.log('attachOverlay');
        if (!this.portal && this.shAutocomplete.template) {
            // берем шаблон ангуляр компонента и отображаем его в другом месте
            this.portal = new TemplatePortal(this.shAutocomplete.template, this.viewContainerRef);
        }

        if (!this.overlayRef) {
            // Создаем ссылку на всплываху
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }

        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            // this.selectionChangeSubscription = this.subscribeSelectionChange();
            // this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            // this.optionsChangeSubscription = this.subscribeOptionsChange();
           // this.overlayRef
           //   .detachments()
           //   .pipe(takeUntil(this.destroy$))
           //   .subscribe(() => {
           //     this.closePanel();
            //  });
          }

        this.shAutocomplete.isOpen = true;
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

    private getOverlayConfig(): OverlayConfig {
        return new OverlayConfig({
          positionStrategy: this.getOverlayPosition(),
          disposeOnNavigation: true,
          scrollStrategy: this.overlay.scrollStrategies.reposition(),
          // default host element width
          width: this.shAutocomplete.nzWidth || this.getHostWidth()
        });
    }

    private getOverlayPosition(): PositionStrategy {
        const positions = [
          new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
          new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
          .position()
          .flexibleConnectedTo(this.getConnectedElement())
          .withFlexibleDimensions(false)
          .withPush(false)
          .withPositions(positions)
          .withTransformOriginOn('.ant-select-dropdown');
        return this.positionStrategy;
    }

    private getConnectedElement(): ElementRef {
        return this.elementRef;
    }

    private getHostWidth(): number {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
}
