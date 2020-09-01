import { Directive, OnDestroy, forwardRef, ExistingProvider, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { AutocompleteComponent } from "./autocomplete.component";


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
        // this.attachOverlay();
        // this.updateStatus();
    }

    private attachOverlay(): void {
        this.shAutocomplete.isOpen = true;
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}
