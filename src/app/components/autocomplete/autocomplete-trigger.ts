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

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}
